import fs from "node:fs";
import path from "node:path";

function loadEnvFile(filename) {
  const fullPath = path.resolve(process.cwd(), filename);
  if (!fs.existsSync(fullPath)) return;

  const content = fs.readFileSync(fullPath, "utf8");
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const idx = line.indexOf("=");
    if (idx <= 0) continue;

    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId) {
  throw new Error("Missing SANITY_PROJECT_ID (or NEXT_PUBLIC_SANITY_PROJECT_ID).");
}

if (!token) {
  throw new Error("Missing SANITY_API_TOKEN.");
}

const apiVersion = "2025-02-19";
const url = `https://${projectId}.api.sanity.io/${apiVersion}/data/mutate/${dataset}`;

const now = new Date().toISOString();

const posts = [
  {
    _id: "post.choose-aircraft-refueling-truck-fast-turnaround",
    _type: "post",
    title: "How to Choose an Aircraft Refueling Truck for Fast Turnaround",
    slug: { _type: "slug", current: "how-to-choose-aircraft-refueling-truck-fast-turnaround" },
    status: "published",
    excerpt:
      "A practical buying framework for selecting an aircraft refueling truck that supports faster aircraft turnaround and operational continuity.",
    publishedAt: now,
    readingTime: 6,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Prioritize flow rate, filtration quality, and safety controls when comparing aircraft refueler options for time-sensitive operations.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "For teams needing rapid deployment, evaluate ready-stock units with inspection access and clear export support.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Explore our 18000L Aircraft Refueling Truck page for specifications and quotation support: https://www.zencorp.ae/products/aircraft-refueling-truck",
          },
        ],
      },
    ],
    seo: {
      metaTitle: "How to Choose an Aircraft Refueling Truck | Zencorp",
      metaDescription: "Selection criteria for aircraft refueling trucks focused on speed, safety, and uptime.",
      canonicalUrl: "https://www.zencorp.ae/blog/how-to-choose-aircraft-refueling-truck-fast-turnaround",
    },
  },
  {
    _id: "post.aircraft-refueling-truck-lead-time-oem-vs-ready-stock",
    _type: "post",
    title: "Aircraft Refueling Truck Lead Time: OEM vs Ready Stock",
    slug: { _type: "slug", current: "aircraft-refueling-truck-lead-time-oem-vs-ready-stock" },
    status: "published",
    excerpt:
      "A side-by-side comparison of OEM production timelines and ready-stock deployment timelines for aircraft refueler procurement.",
    publishedAt: now,
    readingTime: 5,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "OEM production often adds queue time and schedule uncertainty, while ready-stock options can reduce ramp-up risk for fuel operations.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Procurement teams should compare total time to operational readiness, not only ex-factory lead time.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Request a ready stock aircraft refueling truck quote with inspection and export terms: https://www.zencorp.ae/products/aircraft-refueling-truck",
          },
        ],
      },
    ],
    seo: {
      metaTitle: "Aircraft Refueling Truck Lead Time: OEM vs Ready Stock | Zencorp",
      metaDescription: "Compare OEM and ready-stock timelines for aircraft refueling truck procurement.",
      canonicalUrl: "https://www.zencorp.ae/blog/aircraft-refueling-truck-lead-time-oem-vs-ready-stock",
    },
  },
  {
    _id: "post.export-checklist-aviation-refueler-procurement",
    _type: "post",
    title: "Export Checklist for Aviation Refueler Procurement",
    slug: { _type: "slug", current: "export-checklist-aviation-refueler-procurement" },
    status: "published",
    excerpt:
      "A concise export and documentation checklist for buyers sourcing aviation refueler equipment across borders.",
    publishedAt: now,
    readingTime: 5,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Confirm Incoterms, inspection scope, packing list, and shipping documentation before purchase confirmation.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Third-party inspection and complete technical documentation reduce clearance and commissioning delays.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Use this checklist before requesting your 18000L refueler quote: https://www.zencorp.ae/products/aircraft-refueling-truck",
          },
        ],
      },
    ],
    seo: {
      metaTitle: "Export Checklist for Aviation Refueler Procurement | Zencorp",
      metaDescription: "Checklist for exporting and procuring aviation refueler equipment with fewer delays.",
      canonicalUrl: "https://www.zencorp.ae/blog/export-checklist-aviation-refueler-procurement",
    },
  },
];

const mutations = posts.map((post) => ({ createOrReplace: post }));

const response = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({ mutations }),
});

const data = await response.json();

if (!response.ok) {
  throw new Error(`Sanity mutation failed (${response.status}): ${JSON.stringify(data)}`);
}

console.log(`Seeded ${posts.length} aircraft refueler post documents into dataset "${dataset}" (${projectId}).`);
