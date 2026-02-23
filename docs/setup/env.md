# Environment Setup (Vercel + Local)

This project is configured for:
- CMS: Sanity only
- Email: Resend first, Gmail fallback
- Required coverage: Vercel `Preview` and `Production`

## Required Variables

| Variable | Required In | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Preview + Production | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Preview + Production | Supabase public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Preview + Production | Server-side Supabase writes |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Preview + Production | Sanity read client |
| `NEXT_PUBLIC_SANITY_DATASET` | Preview + Production | Sanity dataset (`production`) |
| `RESEND_API_KEY` | Preview + Production | Preferred outbound email credential |
| `EMAIL_FROM` | Preview + Production | Sender address |
| `EMAIL_TO` | Preview + Production | Destination inbox for contact form |

## Optional Variables

| Variable | Purpose |
| --- | --- |
| `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_TOKEN` | Optional private Sanity credentials |
| `RESEND_SMTP_*` | SMTP override values; optional when using `RESEND_API_KEY` |
| `EMAIL_USER`, `EMAIL_PASSWORD` | Gmail fallback transport |

## Currently Unused Variables

The following are not used by runtime code and are optional:
- `NEXT_PUBLIC_CONTENTFUL_GRAPHQL_ENDPOINT`
- `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`
- `CONTENTFUL_GRAPHQL_ENDPOINT`
- `CONTENTFUL_ACCESS_TOKEN`

## Vercel Checklist

1. Open Project Settings -> Environment Variables.
2. Add all required keys for `Preview`.
3. Add the same required keys for `Production`.
4. Redeploy `Preview`.
5. Verify:
- `/blog` loads posts from Sanity.
- Contact form returns success and an email arrives at `EMAIL_TO`.
6. Promote to Production and redeploy.
7. Repeat smoke checks in Production.

## Quick Verification

1. Trigger one contact form submission with complete fields.
2. Confirm row insert in Supabase table `inquiries`.
3. Confirm inbound email at `EMAIL_TO`.
4. Run secret scanning checks:
- `npm run secrets:scan`
- `npm run secrets:scan:history`
