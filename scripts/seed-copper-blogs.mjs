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
    _id: "post.copper-supply-outlook-2026",
    _type: "post",
    title: "Copper Supply Outlook 2026: What Procurement Teams Should Watch",
    slug: { _type: "slug", current: "copper-supply-outlook-2026" },
    status: "published",
    excerpt:
      "A practical view of supply pressure, shipping volatility, and how buyers can reduce risk with phased purchasing and dual-source planning.",
    publishedAt: now,
    readingTime: 6,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Copper buyers in 2026 are balancing price swings, lead-time variability, and route uncertainty across major shipping lanes.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "A resilient strategy combines forecast-based call-offs, alternate supplier qualification, and tighter logistics visibility from loading to delivery.",
          },
        ],
      },
    ],
    seo: {
      metaTitle: "Copper Supply Outlook 2026 | Zencorp",
      metaDescription: "How procurement teams can manage copper supply volatility in 2026.",
    },
  },
  {
    _id: "post.metals-procurement-playbook",
    _type: "post",
    title: "How to Build a Reliable Metals Procurement Playbook",
    slug: { _type: "slug", current: "metals-procurement-playbook" },
    status: "published",
    excerpt:
      "A step-by-step procurement framework covering demand planning, supplier scorecards, quality controls, and contract safeguards.",
    publishedAt: now,
    readingTime: 7,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Strong procurement starts with disciplined demand plans and supplier qualification that goes beyond unit pricing.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Use scorecards tied to OTIF, quality incidents, responsiveness, and commercial flexibility to guide allocation decisions.",
          },
        ],
      },
    ],
    seo: {
      metaTitle: "Reliable Metals Procurement Playbook | Zencorp",
      metaDescription: "Procurement workflow for metals teams managing quality, lead time, and cost.",
    },
  },
  {
    _id: "post.reducing-delivery-risk-industrial-logistics",
    _type: "post",
    title: "Reducing Delivery Risk in Cross-Border Industrial Logistics",
    slug: { _type: "slug", current: "reducing-delivery-risk-industrial-logistics" },
    status: "published",
    excerpt:
      "A checklist for importers and project teams to reduce shipment delays, customs surprises, and document errors in cross-border moves.",
    publishedAt: now,
    readingTime: 5,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Cross-border reliability improves when teams align commercial invoices, HS codes, packing lists, and transport milestones before dispatch.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Early exception tracking and pre-cleared documentation are practical ways to reduce avoidable detention and demurrage costs.",
          },
        ],
      },
    ],
    seo: {
      metaTitle: "Reducing Delivery Risk in Industrial Logistics | Zencorp",
      metaDescription: "How industrial teams can reduce delivery risk across border operations.",
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

console.log(`Seeded ${posts.length} post documents into dataset "${dataset}" (${projectId}).`);
