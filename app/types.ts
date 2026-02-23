export type SanitySeo = {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  noindex?: boolean;
};

export type SanityAuthor = {
  name?: string;
  slug?: string;
};

export type SanityCategory = {
  title?: string;
  slug?: string;
};

export type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  readingTime?: number;
  featuredImageUrl?: string;
  author?: SanityAuthor;
  categories?: SanityCategory[];
  tags?: SanityCategory[];
  seo?: SanitySeo;
  body?: unknown[];
  relatedPosts?: Pick<SanityPost, "_id" | "title" | "slug" | "featuredImageUrl">[];
};

export type Profile = {
  id: string;
  full_name?: string | null;
  phone?: string | null;
  company?: string | null;
  avatar_url?: string | null;
};

export type Inquiry = {
  id: string;
  user_id?: string | null;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  subject: string;
  message: string;
  status: "new" | "in_progress" | "resolved" | "closed";
  created_at: string;
};

export type NewsletterPreference = {
  user_id: string;
  subscribed: boolean;
  topics: string[];
};

export type BlogComment = {
  id: string;
  post_slug: string;
  user_id?: string | null;
  author_name: string;
  content: string;
  status: "pending" | "approved" | "rejected" | "spam";
};

export type UserRole = "super_admin" | "editor" | "support";
