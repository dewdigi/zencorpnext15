import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { getPublicEnv } from "@/lib/env/public";
import { getServerEnv } from "@/lib/env/server";

export async function createSupabaseServerClient() {
  const { supabaseUrl, supabaseAnonKey } = getPublicEnv();
  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // no-op
        }
      },
    },
  });
}

export function createSupabaseServiceClient() {
  const { supabaseUrl, supabaseServiceRoleKey } = getServerEnv();
  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
