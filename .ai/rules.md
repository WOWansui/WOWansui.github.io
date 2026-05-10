# Rules

## MUST

- Get explicit user confirmation before modifying code unless the user has clearly asked to execute the change.
- Communicate with the user in Chinese by default unless the user requests another language or the artifact requires another language.
- Give a concise plan before code changes.
- Inspect the existing code structure before implementation.
- Keep changes small, targeted, and consistent with local patterns.
- Update or add pytest coverage when behavior changes or risk warrants it.
- For debugging and research code, expose incorrect states clearly instead of silently masking them.
- Preserve unrelated user changes in the working tree.
- Follow PEP 8 and common community conventions unless local style or practical constraints justify an exception.
- If breaking a convention avoids unnecessary complexity or matches local practice, explain the tradeoff.
- Call out prompt, rule, schema, or skill conflicts and get confirmation before changing guidance.
- Inspect the actual git state before writing any commit message.
- Make commit messages reflect real staged or unstaged changes, not memory or intent.

## MUST NOT

- Do not silently modify code after an analysis-only request.
- Do not perform broad refactors, restructures, dependency changes, or design rewrites without explicit approval.
- Do not introduce abstractions, frameworks, or conventions that feel inconsistent with the current codebase.
- Do not add silent error handling that lets training continue with questionable data correctness unless explicitly requested.
- Do not hide failing tests, skipped validation, or uncertainty about results.
- Do not knowingly let skill files, docs, and code contradict each other.
