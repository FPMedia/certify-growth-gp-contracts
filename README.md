# @gp/contracts (staging)

Shared API contracts. Consumed by **Next.js** (frontends), **NestJS** (Node APIs), and **FastAPI** (scoring).

No Laravel/PHP types in this package.

## Extraction target

This directory is the **staging copy** of shared schemas and generated types. It will be extracted to the dedicated repository:

**`certify-growth-gp-contracts`**

After extraction:

- Publish **`@gp/contracts`** to npm (or GitHub Packages) from that repo only.
- Service repos pin a version: `npm install @gp/contracts@x.y.z`.
- Remove or freeze `packages/contracts/` in certify-growth-gp-ecosystem once all consumers use the published package.

See [docs/repositories.md](../../docs/repositories.md#0-contracts-to-certify-growth-gp-contracts) and [MONOREPO_DEPRECATED.md](../../MONOREPO_DEPRECATED.md).