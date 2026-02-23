import { getPublicEnv } from "./public";

export type ServerEnv = {
  supabaseUrl: string;
  supabaseAnonKey: string;
  supabaseServiceRoleKey: string;
  sanityProjectId: string;
  sanityDataset: string;
  sanityApiToken?: string;
  resendApiKey?: string;
  resendSmtpHost: string;
  resendSmtpPort: number;
  resendSmtpSecure: boolean;
  resendSmtpUser: string;
  resendSmtpPassword?: string;
  emailUser?: string;
  emailPassword?: string;
  emailFrom?: string;
  emailTo?: string;
};

function parseBoolean(value: string | undefined, fallback: boolean): boolean {
  if (!value) return fallback;
  return value.toLowerCase() !== "false";
}

function parseNumber(value: string | undefined, fallback: number): number {
  if (!value) return fallback;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? fallback : parsed;
}

export function getServerEnv(): ServerEnv {
  const publicEnv = getPublicEnv();
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseServiceRoleKey) {
    throw new Error("Missing required server environment variables: SUPABASE_SERVICE_ROLE_KEY");
  }

  return {
    supabaseUrl: publicEnv.supabaseUrl,
    supabaseAnonKey: publicEnv.supabaseAnonKey,
    supabaseServiceRoleKey,
    sanityProjectId: publicEnv.sanityProjectId || process.env.SANITY_PROJECT_ID || "",
    sanityDataset: publicEnv.sanityDataset || process.env.SANITY_DATASET || "production",
    sanityApiToken: process.env.SANITY_API_TOKEN,
    resendApiKey: process.env.RESEND_API_KEY,
    resendSmtpHost: process.env.RESEND_SMTP_HOST || "smtp.resend.com",
    resendSmtpPort: parseNumber(process.env.RESEND_SMTP_PORT, 465),
    resendSmtpSecure: parseBoolean(process.env.RESEND_SMTP_SECURE, true),
    resendSmtpUser: process.env.RESEND_SMTP_USER || "resend",
    resendSmtpPassword: process.env.RESEND_SMTP_PASSWORD,
    emailUser: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD,
    emailFrom: process.env.EMAIL_FROM,
    emailTo: process.env.EMAIL_TO,
  };
}

export function assertServerEnvForContact(): void {
  const env = getServerEnv();
  const missing: string[] = [];

  if (!env.emailFrom) missing.push("EMAIL_FROM");
  if (!env.emailTo) missing.push("EMAIL_TO");
  if (!env.resendApiKey && !env.resendSmtpPassword) missing.push("RESEND_API_KEY or RESEND_SMTP_PASSWORD");

  if (missing.length > 0) {
    throw new Error(`Missing required contact environment variables: ${missing.join(", ")}`);
  }
}
