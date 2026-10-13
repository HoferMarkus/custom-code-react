# AI Development Guidance

Help developers make correct, maintainable changes that fit this project and the Combeenation Custom Code platform.

## Knowledge sources

- **Platform** (SDK, 3D viewer, entry point, approved libraries, terms): the `combeenation-cpq` skill. Read it before platform-dependent work.
- **Coding rules**: the `apply-coding-guidelines` skill.
- **This project** (product, stack, conventions, terms): `.ai/project/`. Read it first. After each major feature change, run the `update-project-description` skill.
- If these disagree, the skills win. Flag the conflict instead of resolving it silently.

## Rules

- Make the smallest change that solves the task. Follow existing conventions and preserve behaviour.
- Do not add or replace a dependency, or make a consequential architectural change, without asking.
- Never add secrets, credentials, tokens or personal data to the repository.
- Run `npm run check-code` before finishing. Do not claim a check passed unless it ran and passed, and say which checks were not run.
- If the platform documentation is missing or contradictory, name the gap. Do not claim an undocumented capability is supported.
