# AGENTS

This repository uses these files as compact guidance for AI programming agents.
Keep the guidance project-neutral unless the user explicitly confirms a
project-specific convention.

## Guidance Files

- `.ai/rules.md`: core working rules for AI agents.
- `.ai/tasks.md`: reusable workflows for common agent tasks.
- `.ai/schema.md`: intentionally empty unless a future project-specific schema is confirmed.

## Editing Philosophy

- Make small, targeted changes.
- Preserve the existing repository structure and local style.
- Prefer incremental updates over redesign.
- Do not refactor or change behavior beyond the requested scope without explicit approval.
- When code changes affect behavior, keep tests and docs in sync where appropriate.
- For research/debugging work, prefer exposing and fixing root causes over adding silent fallbacks.
- If a rule needs to be broken for practical reasons, explain why and keep the exception local.

## Change Workflow

- Communicate with the user in Chinese by default, unless the user asks for another language or the artifact itself should use another language.
- For code changes, first inspect the relevant context and propose a concise plan.
- Wait for user confirmation before editing code unless the user has explicitly asked to execute.
- After editing, report the changed files, validation performed, and any remaining uncertainty.
- Treat existing uncommitted work as user-owned unless it is clearly part of the current task.

## Git Commits

- Use `type(scope): subject` as the default commit message format.
- Keep `type` short and semantically clear.
- Use `scope` when it helps identify the affected area, such as `train`, `env`, `model`, `config`, `docs`, or `tests`.
- If extra detail is needed, add a short flat bullet list in the commit body.
- Commit messages should describe the actual git state, not the intended plan.
- Inspect the real repository state before writing a commit message.

Examples:

- `fix(train): avoid distributed metric deadlock`
- `perf(env): profile registration step latency`
- `test(config): cover finalized dqn defaults`

## Conflict Handling

When a user request conflicts with current rules, tasks, schema, or other skill guidance:

1. Identify the conflict explicitly.
2. Explain the difference between current guidance and requested behavior.
3. Ask for confirmation of the new convention.
4. After confirmation, update the relevant guidance files together.

Do not silently ignore conflicts.
Do not leave code, docs, and guidance files knowingly out of sync.
