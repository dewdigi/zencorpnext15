type AdminBlogInput = {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  status: "draft" | "published";
};

type SanityBlogSummary = {
  _id: string;
  title: string;
  slug: string;
  status: string;
  publishedAt?: string;
  _updatedAt?: string;
};

function getSanityAdminConfig() {
  const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
  const token = process.env.SANITY_API_TOKEN;

  const missing: string[] = [];
  if (!projectId) missing.push("SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_PROJECT_ID");
  if (!token) missing.push("SANITY_API_TOKEN");

  if (missing.length > 0) {
    throw new Error(`Missing Sanity admin configuration: ${missing.join(", ")}`);
  }

  return { projectId, dataset, token };
}

function toPortableTextBlocks(content: string) {
  const paragraphs = content
    .split(/\r?\n\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (paragraphs.length === 0) {
    return [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "" }],
      },
    ];
  }

  return paragraphs.map((paragraph) => ({
    _type: "block",
    style: "normal",
    children: [{ _type: "span", text: paragraph }],
  }));
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

async function sanityMutation(mutations: unknown[]) {
  const { projectId, dataset, token } = getSanityAdminConfig();
  const apiVersion = "2026-01-01";
  const url = `https://${projectId}.api.sanity.io/${apiVersion}/data/mutate/${dataset}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ mutations }),
    cache: "no-store",
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body?.message || `Sanity mutation failed (${response.status})`);
  }

  return body;
}

export async function createSanityBlog(input: AdminBlogInput) {
  const now = new Date().toISOString();
  const slug = slugify(input.slug || input.title);
  const id = `post.${slug}`;

  const doc = {
    _id: id,
    _type: "post",
    title: input.title.trim(),
    slug: { _type: "slug", current: slug },
    excerpt: input.excerpt.trim(),
    status: input.status,
    publishedAt: input.status === "published" ? now : undefined,
    readingTime: Math.max(3, Math.ceil(input.body.split(/\s+/).filter(Boolean).length / 220)),
    body: toPortableTextBlocks(input.body),
  };

  await sanityMutation([{ createOrReplace: doc }]);
  return { id, slug };
}

export async function deleteSanityBlog(id: string) {
  await sanityMutation([{ delete: { id } }]);
}

export async function listSanityBlogs(limit = 100): Promise<SanityBlogSummary[]> {
  const { projectId, dataset, token } = getSanityAdminConfig();
  const apiVersion = "2026-01-01";
  const safeLimit = Math.max(1, Math.min(500, Number(limit) || 100));
  const query = encodeURIComponent(
    `*[_type == "post"] | order(coalesce(publishedAt, _updatedAt) desc)[0...${safeLimit}]{
      _id,
      title,
      "slug": slug.current,
      status,
      publishedAt,
      _updatedAt
    }`,
  );
  const url = `https://${projectId}.api.sanity.io/${apiVersion}/data/query/${dataset}?query=${query}`;

  const response = await fetch(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  const body = await response.json();
  if (!response.ok) {
    throw new Error(body?.message || `Sanity query failed (${response.status})`);
  }

  return (body.result || []) as SanityBlogSummary[];
}
