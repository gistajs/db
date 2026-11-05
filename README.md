# DB Starter

The bare minimum deployable database starter with SSR plumbing prewired.

## Quick Start

Need help getting set up? Follow the step-by-step guide at https://gistajs.com/learn.

### 1. Deploy to Vercel

Click "Use this template" on GitHub, then import your new repo to Vercel.

### 2. Run locally

```bash
pnpm install
pnpm dev
```

## What's included

- React Router v7 (SSR mode)
- Drizzle ORM + libsql client
- Atlas schema apply flow (`atlas schema apply --env dev`)
- Tailwind CSS v4 + daisyUI v5
- Vite dev server (hot reload)
- Deployable anywhere (Vercel, Render, etc.)

## What's not included (yet)

- No domain schema (you define your own tables)
- No authentication
- No prebuilt product features
- No external services preconfigured

## Next steps

Start defining schema in `app/.server/db/schema.ts`, apply it with `atlas schema apply --env dev`,
then build your routes.

## Issues

Issues are welcome in this repository if something looks off.

Direct PRs are not accepted here.
