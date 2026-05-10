# Common Tasks

## Prepare Code Change

- Inspect the relevant files and existing patterns.
- Propose the intended change and wait for user confirmation unless execution was already requested.
- Keep the implementation scoped to the confirmed request.
- Update or add pytest tests when the change affects behavior.
- Run the most relevant validation command that is practical for the change.
- Report changed files, validation results, and any remaining risk.

## Debug Training Or Performance

- First identify the phase where behavior changes, such as warmup, replay updates, evaluation, logging, synchronization, or data loading.
- Separate measurement from optimization: add timing or diagnostics before changing model or training behavior.
- Prefer explicit assertions, detailed logs, or fail-fast checks over silent correction when data correctness is uncertain.
- After the cause is clear, propose whether the fix belongs in data processing, training code, distributed logic, or model design.
- Do not change model architecture or training semantics without user confirmation.

## Prepare Commit Message

- Inspect the real repository state first.
- Check `git status` before naming the commit.
- Check the relevant diff summary before writing the subject and bullets.
- Use `type(scope): subject`.
- If needed, add a short flat bullet list for the main changes.
- Describe what changed, not what was planned.

## Update Agent Guidance

- Remove obsolete or project-specific guidance before adding new rules.
- Keep new guidance concise and operational.
- Avoid adding feature-specific constraints unless the user explicitly wants them.
- If the prompt conflicts with existing guidance, call out the conflict and ask for confirmation before updating.
