import nodemailer from "nodemailer";
import { getServerEnv } from "@/lib/env/server";

type TransportConfig = {
  transporter: nodemailer.Transporter;
  fromAddress: string;
};

export function createMailTransport(): TransportConfig {
  const env = getServerEnv();
  const hasResendConfig = Boolean(env.resendApiKey || env.resendSmtpPassword);

  if (hasResendConfig) {
    const pass = env.resendSmtpPassword || env.resendApiKey;
    const fromAddress = env.emailFrom || env.emailUser;

    if (!pass || !fromAddress) {
      throw new Error("Missing RESEND_SMTP_PASSWORD/RESEND_API_KEY or EMAIL_FROM/EMAIL_USER for Resend SMTP");
    }

    const transporter = nodemailer.createTransport({
      host: env.resendSmtpHost,
      port: env.resendSmtpPort,
      secure: env.resendSmtpSecure,
      auth: { user: env.resendSmtpUser, pass },
    });

    return { transporter, fromAddress };
  }

  const user = env.emailUser;
  const pass = env.emailPassword;
  if (!user || !pass) {
    throw new Error("Missing EMAIL_USER or EMAIL_PASSWORD");
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: { user, pass },
  });

  return { transporter, fromAddress: env.emailFrom || user };
}
