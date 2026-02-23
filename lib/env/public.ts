export type PublicEnv = {
  supabaseUrl: string;
  supabaseAnonKey: string;
  sanityProjectId: string;
  sanityDataset: string;
};

function requirePublicVars(entries: Array<[key: string, value: string | undefined]>): Record<string, string> {
  const missing = entries.filter(([, value]) => !value).map(([key]) => key);
  if (missing.length > 0) {
    throw new Error(`Missing required public environment variables: ${missing.join(", ")}`);
  }

  return Object.fromEntries(entries.map(([key, value]) => [key, value as string]));
}

export function getPublicEnv(): PublicEnv {
  const env = requirePublicVars([
    ["NEXT_PUBLIC_SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL],
    ["NEXT_PUBLIC_SUPABASE_ANON_KEY", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY],
  ]);
  const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
  const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || "production";

  if (!sanityProjectId) {
    throw new Error("Missing required public environment variables: NEXT_PUBLIC_SANITY_PROJECT_ID");
  }

  return {
    supabaseUrl: env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    sanityProjectId,
    sanityDataset,
  };
}
