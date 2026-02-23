import { defineType, defineField } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "defaultMetaTitle", type: "string" }),
    defineField({ name: "defaultMetaDescription", type: "text" }),
    defineField({ name: "socialLinks", type: "object", fields: [
      defineField({ name: "facebook", type: "url" }),
      defineField({ name: "instagram", type: "url" }),
      defineField({ name: "linkedin", type: "url" }),
      defineField({ name: "x", title: "X/Twitter", type: "url" }),
    ]}),
    defineField({ name: "footerText", type: "text" }),
  ],
});
