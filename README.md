# @gp/contracts

Shared API contracts for the Growth Predictor platform. Consumed by **Next.js** (web), **NestJS/Fastify** (Node APIs), and **FastAPI** (scoring).

No Laravel/PHP types in this package.

## Contents

- `schemas/` — JSON Schema (source of truth): submission, form payload, likert option, score result, report document, `submission.completed` event
- `ts/` — TypeScript types (exported via `@gp/contracts`)
- `python/` — Pydantic models for the scoring service

## Validate

```bash
npm run validate   # checks all JSON Schemas
```

## Consumption (current)

Until the package is published, each service repo vendors a copy and depends on it as `"@gp/contracts": "file:./vendor/contracts"`. When you change contracts here, re-sync the `vendor/contracts` copies in the consuming repos.

## Publishing (planned)

Publish to npm or GitHub Packages, then have service repos pin a version (`npm install @gp/contracts@x.y.z`) and delete their `vendor/contracts` copies. Note: `"private": true` must be removed from `package.json` before publishing.
