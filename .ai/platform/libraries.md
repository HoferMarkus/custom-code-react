# Approved third-party libraries

> Scope: Platform libraries. Identical in every project and owned by the platform team. Do not edit or adapt it inside a project.  
> Owner: Needs verification  
> Last verified: Draft. Derived from a reference project (`custom-code-react`) on 2026-10-12 and not yet confirmed by the platform owner.

This catalogue describes the organization's guidance for platform libraries. Project-chosen libraries (UI framework, styling and so on) are listed in `.ai/project.md`. A library being present in an existing project does not automatically mean every version or use case is approved.

## Support statuses

- **Supported:** Approved for the documented use cases and version range.
- **Limited:** Approved only for stated use cases or with stated constraints.
- **Deprecated:** Avoid for new work; migration guidance should be documented.
- **Unsupported:** Do not use for new work without an explicit exception.
- **Needs verification:** Support status or constraints have not yet been confirmed.

## Library catalogue

No library below has a confirmed support status or supported version range. The versions a project uses are in its own `package.json`.

### @combeenation/custom-code-sdk

- **Purpose:** Connects custom code to the configurator (`ValueComponent`, `CustomControl`, `Panel`).
- **Support status:** Needs verification
- **Supported versions:** Unknown
- **Approved use cases:** Component subscriptions and writes, and custom control rendering (see `capabilities.md`).
- **Do not use for:** Unknown
- **Compatibility:** Unknown
- **Required configuration:** Generated typings in `src/typings/cfgr-defs.generated.ts`.
- **Security and data considerations:** Needs verification
- **Known limitations:** It depends on `zod`, which the generated typings import directly. Some SDK features, such as unsubscribing from value changes, may depend on the build. Needs verification.
- **Authoritative documentation:** <https://custom-code.docs.combeenation.com/> (not reviewed)
- **Owner:** Needs verification
- **Last verified:** Not verified

### @combeenation/3d-viewer

- **Purpose:** 3D rendering. It re-exports Babylon.js types such as `Color3`, `MeshBuilder` and `PBRMaterial`.
- **Support status:** Needs verification
- **Supported versions:** Unknown
- **Approved use cases:** Rendering a scene on a canvas (see `capabilities.md`).
- **Do not use for:** Unknown
- **Compatibility:** Unknown
- **Required configuration:** A canvas element.
- **Security and data considerations:** Needs verification
- **Known limitations:** Needs verification
- **Authoritative documentation:** <https://3dviewer.docs.combeenation.com/> (not reviewed)
- **Owner:** Needs verification
- **Last verified:** Not verified

### Build and quality tooling

- **Purpose:** Shared build and code-quality setup.
- **Support status:** Needs verification
- **Supported versions:** Unknown
- **Packages:**
  - `@combeenation/vite-plugin-custom-code-sync`
  - `@combeenation/ts-config`
  - `@combeenation/eslint-config`
  - `@combeenation/prettier-config`
- **Approved use cases:** Extend the shared TypeScript, ESLint and Prettier configs, and use the Vite plugin for the build.
- **Do not use for:** Unknown
- **Compatibility:** Needs verification
- **Required configuration:** `tsconfig.json` extends the shared TypeScript config. `eslint.config.mjs` extends the shared ESLint config. `vite.config.js` registers the Vite plugin.
- **Security and data considerations:** Needs verification
- **Known limitations:** Needs verification
- **Authoritative documentation:** Needs verification
- **Owner:** Needs verification
- **Last verified:** Not verified

## Dependency selection rules

1. Prefer libraries already approved for the required use case.
2. Check the version declared in project manifests and lockfiles; do not assume the latest version is compatible.
3. Verify maintenance, compatibility, security, licensing, and platform requirements according to organizational policy.
4. Explain the reason and trade-offs before proposing a new dependency.
5. Do not claim that a library is approved solely because it is already installed.
6. When sources conflict, flag the conflict and seek confirmation from the library or platform owner.

## Open questions

- Which versions of each library does the platform support? — Platform team — Ask
- Are unreleased SDK builds ever approved for production? — Platform team — Ask
- Should the SDK declare `zod` as a peer dependency, since generated typings import it? — Platform team — Ask
