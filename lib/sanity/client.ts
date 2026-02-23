import { createClient } from "@sanity/client";
import { getPublicEnv } from "@/lib/env/public";

const { sanityProjectId, sanityDataset } = getPublicEnv();
export const isSanityConfigured = Boolean(sanityProjectId && sanityDataset);

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: "2026-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
