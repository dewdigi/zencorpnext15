import nodemailer from "nodemailer";

type TransportConfig = {
  transporter: nodemailer.Transporter;
  fromAddress: string;
};

function hasResendConfig() {
  return Boolean(process.env.RESEND_SMTP_PASSWORD || process.env.RESEND_SMTP_USER);
}

export function createMailTransport(): TransportConfig {
  if (hasResendConfig()) {
    const host = process.env.RESEND_SMTP_HOST || "smtp.resend.com";
    const port = Number(process.env.RESEND_SMTP_PORT || "465");
    const secure = (process.env.RESEND_SMTP_SECURE || "true").toLowerCase() !== "false";
    const user = process.env.RESEND_SMTP_USER || "resend";
    const pass = process.env.RESEND_SMTP_PASSWORD;
    const fromAddress = process.env.EMAIL_FROM || process.env.EMAIL_USER;

    if (!pass || !fromAddress) {
      throw new Error("Missing RESEND_SMTP_PASSWORD or EMAIL_FROM/EMAIL_USER for Resend SMTP");
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    return { transporter, fromAddress };
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD;
  if (!user || !pass) {
    throw new Error("Missing EMAIL_USER or EMAIL_PASSWORD");
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: { user, pass },
  });

  return { transporter, fromAddress: process.env.EMAIL_FROM || user };
}
