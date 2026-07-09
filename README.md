# @gp/contracts

Shared API contracts for the Growth Predictor platform. Consumed by **Next.js** (web), **NestJS/Fastify** (Node APIs), and **FastAPI** (scoring).

## Contents

- `schemas/` — JSON Schema (source of truth): submission, form payload, likert option, score result, report document, `submission.completed` event
- `ts/` — TypeScript types (exported via `@gp/contracts`)
- `python/` — Pydantic models for the scoring service

## Validate

```bash
npm run validate   # checks all JSON Schemas
```

## Consumption (current)

Each Node service and the web app depend on `@gp/contracts` as a **git dependency** from the public GitHub repo:

```json
"@gp/contracts": "git+https://github.com/FPMedia/certify-growth-gp-contracts.git#semver:^0.1.0"
```

No `vendor/contracts` copies — installs clone from GitHub (anonymous; no tokens needed).

**Releasing a new version:** bump `version` in `package.json`, commit, then `git tag vX.Y.Z && git push origin main vX.Y.Z`. Consumers on `^0.1.0` pick up patch releases on the next `npm install`. See [AGENTS.md](AGENTS.md) for semver rules.

## Publishing to npm (optional, not required)

The package is consumed via git today. To publish to npm or GitHub Packages instead, remove `"private": true` from `package.json`, publish, and update consuming repos to pin `npm install @gp/contracts@x.y.z`.
