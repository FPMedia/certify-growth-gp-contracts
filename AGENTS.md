# Agent guide — certify-growth-gp-contracts

The `@gp/contracts` package: shared JSON Schemas (source of truth) + generated TS types and Python Pydantic models. Consumed by the six Node services and the scoring service as a git dependency (`git+https://github.com/FPMedia/certify-growth-gp-contracts.git#semver:^0.1.0`, public repo).

---

## NB — bump the version on every commit

**Every commit that changes package contents must bump `version` in [`package.json`](package.json), and be released as a matching git tag.** Consumers pin `#semver:^0.1.0` and only pick up new versions from tags — an un-bumped, un-tagged change is invisible to them.

On each change:

1. Edit `schemas/`, `ts/`, and/or `python/` and run `npm run validate`.
2. **Bump `version`** in `package.json` (semver):
   - **patch** (`0.1.0 → 0.1.1`) — additive/backward-compatible (new optional field, new type).
   - **minor** (`0.1.x → 0.2.0`) — see note below; requires widening the `^0.1.0` range in the six consuming repos.
   - **major** (`0.x → 1.0.0`) — breaking change to an existing contract.
3. Commit the schema/type change **and** the version bump together.
4. Tag and push: `git tag vX.Y.Z && git push origin main vX.Y.Z`.

> The `^0.1.0` range in consumers auto-upgrades only within `0.1.x`. Prefer **patch** bumps while pre-1.0 so consumers get changes on their next `npm install` with no edits. A minor/major bump means the range must be widened in each consuming repo (see the ecosystem `STATUS.md`) — coordinate that in the same session.

---

## Keep contents in sync

JSON Schema is the source of truth. When a schema changes, regenerate/adjust the TS (`ts/`) and Python (`python/`) representations to match, and run `npm run validate` before committing. Note the change in the ecosystem `STATUS.md` if it affects an API contract other services rely on.

---

## Layout

| Path | Purpose |
|------|---------|
| `schemas/` | JSON Schema — source of truth |
| `ts/` | TypeScript types, exported via `@gp/contracts` (`ts/index.ts`) |
| `python/` | Pydantic models for the scoring service |
| `scripts/validate-schemas.cjs` | `npm run validate` |

**WSL:** `/home/henry/projects/growth-predictor/certify-growth-gp-contracts` (part of the `growth-predictor/` repo family; read `certify-growth-gp-ecosystem/STATUS.md` first).
