# Admin Dashboard Setup

## What this provides
- `/admin/login`: Supabase email/password sign-in.
- `/admin`: Protected dashboard with:
  - User management (list users, set role, delete users).
  - Blog management (create/list/delete Sanity posts).

## Required environment variables

Set these in Vercel `Preview` and `Production`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SITE_URL` (used in password reset email callback)
- `SUPABASE_SERVICE_ROLE_KEY`
- `SANITY_API_TOKEN`
- `SANITY_PROJECT_ID` (or `NEXT_PUBLIC_SANITY_PROJECT_ID`)
- `SANITY_DATASET` (or `NEXT_PUBLIC_SANITY_DATASET`)
- `ADMIN_EMAILS` (comma-separated, ex: `admin@yourco.com,owner@yourco.com`)

## Bootstrap first admin

1. Create/sign-in a Supabase Auth user with an email included in `ADMIN_EMAILS`.
2. Open `/admin/login` and sign in.
3. Go to `/admin`.
4. Use User Management to set role to `admin` for additional users.

## Security model

- Route/API protection is server-side.
- Protected APIs require authenticated Supabase user and admin authorization.
- Admin authorization checks:
  - `user.app_metadata.role === "admin"` OR
  - user email exists in `ADMIN_EMAILS`.

## Password reset flow

- Login page includes `Forgot password?` link.
- `POST /api/admin/auth/forgot-password` sends reset link with non-enumerating response.
- Recovery callback route: `/admin/auth/confirm` (verifies Supabase `token_hash`).
- Final password update page: `/admin/reset-password`.
- Reset update API enforces admin authorization before changing password.

### Supabase Auth URL allow list

Add these URLs in Supabase Auth settings:

- `${NEXT_PUBLIC_SITE_URL}/admin/auth/confirm`
- `http://localhost:3000/admin/auth/confirm` (for local dev)
