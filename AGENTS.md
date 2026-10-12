# AI Development Guidance

## Purpose

Help developers make correct, maintainable changes that fit this project's requirements and the organization's developer platform.

## Documentation layout

- **Platform description (read-only):** `.ai/system.md` and `.ai/coding-guidelines.md`. They are identical in every project and describe the platform (the Combeenation SDK, the 3D viewer, the entry point and approved libraries) and its coding rules, including the ESLint rules. Never edit, adapt or extend them.
- **Project description (editable):** `.ai/project.md`. It covers the product and the coding specifics of this project, such as the React stack, conventions and commands. It is the only file in `.ai/` the agent may adjust.
- If the two disagree about platform behaviour, the platform description wins. Flag the conflict instead of resolving it silently.

## Before making changes

1. Read `.ai/project.md` for the product and the project's coding conventions.
2. Consult the platform description (`.ai/system.md` and `.ai/coding-guidelines.md`) for platform, library and coding decisions.
3. Review relevant specifications and accepted architecture decision records (ADRs), if present.
4. Inspect the existing implementation and follow established project conventions before proposing a new pattern.

## Platform and dependency rules

- Prefer documented, organization-supported platform capabilities and libraries.
- Do not invent APIs, configuration keys, supported versions, compatibility guarantees, or internal platform behavior.
- If the platform description is silent, check the reference documentation listed in `.ai/system.md` before asking.
- Distinguish verified facts from assumptions and recommendations.
- If required information is missing or contradictory, state what is unknown and ask a focused question when it affects correctness, security, or architecture.
- Check compatibility with the versions and conventions already used in this repository before proposing dependency changes.
- Do not replace an approved library or introduce a new dependency without explaining why it is needed and its trade-offs.

## Implementation rules

- Make the smallest change that adequately solves the task.
- Preserve existing behavior unless the requested change requires otherwise.
- Follow existing formatting, naming, error-handling, testing, and architectural conventions.
- Do not expose secrets, credentials, tokens, or personal data. Never add secrets to source control.
- Do not silently change accepted requirements or architecture decisions.
- Do not claim tests, builds, or checks passed unless they were actually run and passed.

## Documentation and decisions

- Update relevant documentation when behavior, configuration, setup, or architectural decisions change.
- Record important architecture decisions in the project's established ADR format, if one exists.
- Keep proposals and assumptions separate from accepted decisions.
- Do not modify `.ai/system.md` or `.ai/coding-guidelines.md`, and do not claim an undocumented platform capability is supported without evidence.

## Validation and response

- Run relevant tests and checks when feasible.
- If checks cannot be run, say which ones were not run and why.
- Summarize the changes, important assumptions, validation performed, and any follow-up needed.
- For platform-dependent work, also name the capability or library used and the file that documents it.
- If the task exposes missing or contradictory platform documentation, name the exact gap and suggest a fix. Do not edit the platform docs.
