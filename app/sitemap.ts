import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.zencorp.ae";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/products/aircraft-refueling-truck`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${siteUrl}/products/shipping`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/products/copper`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/products/building`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/products/fmcg`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/products/hospitality_supplies`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/products/healthcare_accessibility`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/news`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];
}
