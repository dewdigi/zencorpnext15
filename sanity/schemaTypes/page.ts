import { defineType, defineField } from "sanity";

const seoFields = [
  defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
  defineField({ name: "metaDescription", title: "Meta Description", type: "text" }),
  defineField({ name: "canonicalUrl", title: "Canonical URL", type: "url" }),
  defineField({ name: "noindex", title: "No Index", type: "boolean", initialValue: false }),
  defineField({ name: "ogImage", title: "OG Image", type: "image", options: { hotspot: true } }),
];

export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: "status", type: "string", options: { list: ["draft", "published"] }, initialValue: "draft" }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }, { type: "image" }] }),
    defineField({ name: "seo", type: "object", fields: seoFields }),
  ],
});
