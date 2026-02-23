create extension if not exists pgcrypto;

DO $$ BEGIN
  CREATE TYPE app_role AS ENUM ('super_admin', 'editor', 'support');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE TYPE inquiry_status AS ENUM ('new', 'in_progress', 'resolved', 'closed');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE TYPE comment_status AS ENUM ('pending', 'approved', 'rejected', 'spam');
EXCEPTION WHEN duplicate_object THEN null; END $$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  company text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.user_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role app_role not null,
  assigned_by uuid references auth.users(id),
  assigned_at timestamptz not null default now()
);

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  name text not null,
  email text not null,
  phone text,
  company text,
  service text,
  subject text not null,
  message text not null,
  status inquiry_status not null default 'new',
  assigned_to uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.newsletter_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  subscribed boolean not null default true,
  topics jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_comments (
  id uuid primary key default gen_random_uuid(),
  post_slug text not null,
  post_ref text,
  user_id uuid references auth.users(id) on delete set null,
  author_name text not null,
  content text not null,
  status comment_status not null default 'pending',
  moderated_by uuid references auth.users(id) on delete set null,
  moderated_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid references auth.users(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.inquiries enable row level security;
alter table public.newsletter_preferences enable row level security;
alter table public.blog_comments enable row level security;

create or replace function public.current_role()
returns app_role
language sql
stable
as $$
  select role from public.user_roles where user_id = auth.uid();
$$;

create policy "profiles own read" on public.profiles for select using (id = auth.uid());
create policy "profiles own upsert" on public.profiles for all using (id = auth.uid()) with check (id = auth.uid());

create policy "newsletter own read" on public.newsletter_preferences for select using (user_id = auth.uid());
create policy "newsletter own write" on public.newsletter_preferences for all using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "inquiries own read" on public.inquiries for select using (user_id = auth.uid());
create policy "inquiries own create" on public.inquiries for insert with check (user_id = auth.uid() or user_id is null);
create policy "inquiries admin manage" on public.inquiries for all using (public.current_role() in ('super_admin','editor','support')) with check (public.current_role() in ('super_admin','editor','support'));

create policy "comments read approved" on public.blog_comments for select using (status = 'approved' or public.current_role() in ('super_admin','editor','support'));
create policy "comments create" on public.blog_comments for insert with check (status = 'pending');
create policy "comments admin moderate" on public.blog_comments for update using (public.current_role() in ('super_admin','editor','support'));

create policy "roles super admin only" on public.user_roles for all using (public.current_role() = 'super_admin') with check (public.current_role() = 'super_admin');
