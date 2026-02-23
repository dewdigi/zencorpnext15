import dotenv from "dotenv";
import { createClient } from "@sanity/client";

dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

const contentfulEndpoint =
  process.env.NEXT_PUBLIC_CONTENTFUL_GRAPHQL_ENDPOINT || process.env.CONTENTFUL_GRAPHQL_ENDPOINT;
const contentfulToken =
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN;
const sanityProjectId = process.env.SANITY_PROJECT_ID;
const sanityDataset = process.env.SANITY_DATASET || "production";
const sanityToken = process.env.SANITY_API_TOKEN;

const missing = [];
if (!contentfulEndpoint) missing.push("NEXT_PUBLIC_CONTENTFUL_GRAPHQL_ENDPOINT (or CONTENTFUL_GRAPHQL_ENDPOINT)");
if (!contentfulToken) missing.push("NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN (or CONTENTFUL_ACCESS_TOKEN)");
if (!sanityProjectId) missing.push("SANITY_PROJECT_ID");
if (!sanityToken) missing.push("SANITY_API_TOKEN");

if (missing.length > 0) {
  console.error("Missing env vars for migration script:");
  for (const key of missing) console.error(`- ${key}`);
  process.exit(1);
}

const sanity = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  token: sanityToken,
  apiVersion: "2026-01-01",
  useCdn: false,
});

const query = `
  query MigratePosts($limit: Int = 200) {
    pageBlogPostCollection(limit: $limit) {
      items {
        slug
        title
        shortDescription
        publishedDate
        featuredImage {
          url
          description
        }
      }
    }
  }
`;

const response = await fetch(contentfulEndpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${contentfulToken}`,
  },
  body: JSON.stringify({ query, variables: { limit: 200 } }),
});

const payload = await response.json();
const items = payload?.data?.pageBlogPostCollection?.items || [];

for (const item of items) {
  if (!item?.slug || !item?.title) continue;

  const doc = {
    _id: `post-${item.slug}`,
    _type: "post",
    title: item.title,
    slug: { _type: "slug", current: item.slug },
    excerpt: item.shortDescription || "",
    publishedAt: item.publishedDate || new Date().toISOString(),
    status: "published",
  };

  await sanity.createOrReplace(doc);
  console.log(`Migrated ${item.slug}`);
}

console.log(`Done. Migrated ${items.length} posts.`);
