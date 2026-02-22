# Resend Key Incident - 2026-02-22

## Summary
- Report: Resend API key exposure on GitHub.
- Risk: Unauthorized email sending and account abuse.
- Status: Rotation and cleanup required across all environments.

## Containment Checklist
- Revoke leaked key in Resend dashboard.
- Create a new key with minimum permissions required for sending.
- Update `RESEND_API_KEY` (or `RESEND_SMTP_PASSWORD`) in:
  - Local `.env.local`
  - Vercel Preview environment
  - Vercel Production environment
- Redeploy Preview and Production after env update.

## Verification Checklist
- Run `npm run secrets:scan`.
- Run `npm run secrets:scan:history`.
- Verify no active leaks in GitHub secret scanning alerts.
- Submit one inquiry form and one contact form.
- Confirm delivery to:
  - `info@zencorp.ae`
  - `ismailgraphix@gmail.com`

## Team Actions
- Install git hooks once per clone:
  - `npm run hooks:install`
- Do not commit `.env*` files.
- If a secret is found in history, perform a coordinated history rewrite and force-push.
