import { defineType, defineField } from "sanity";

const seoFields = [
  defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
  defineField({ name: "metaDescription", title: "Meta Description", type: "text" }),
  defineField({ name: "canonicalUrl", title: "Canonical URL", type: "url" }),
  defineField({ name: "noindex", title: "No Index", type: "boolean", initialValue: false }),
  defineField({ name: "ogImage", title: "OG Image", type: "image", options: { hotspot: true } }),
];

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", type: "text" }),
    defineField({ name: "featuredImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "gallery", type: "array", of: [{ type: "image" }] }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({ name: "status", type: "string", options: { list: ["draft", "published"] }, initialValue: "draft" }),
    defineField({ name: "scheduledPublishAt", type: "datetime" }),
    defineField({ name: "author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "categories", type: "array", of: [{ type: "reference", to: [{ type: "category" }] }] }),
    defineField({ name: "tags", type: "array", of: [{ type: "reference", to: [{ type: "tag" }] }] }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }, { type: "image" }] }),
    defineField({ name: "readingTime", type: "number" }),
    defineField({ name: "relatedPosts", type: "array", of: [{ type: "reference", to: [{ type: "post" }] }] }),
    defineField({ name: "seo", type: "object", fields: seoFields }),
  ],
  preview: { select: { title: "title", media: "featuredImage", subtitle: "status" } },
});
