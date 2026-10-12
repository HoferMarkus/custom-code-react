# Project context

Project-specific information: the product and the coding specifics of this repository. Platform behaviour (SDK, 3D viewer, entry point) is described in `.ai/platform/` and must not be restated or changed here.

> Maintainer: Needs verification  
> Last reviewed: 2026-10-12 (derived from repository files; not confirmed by the project owner)

# Part 1: Product

## Purpose

Counter demo built as Combeenation custom code. A React UI is rendered into the `ReactRoot_cc` custom control. It shows three counter controls bound to the number components `Cnt1`, `Cnt2` and `Cnt3`, a `Result` value, a 2D view of rectangle stacks and a 3D view of cube stacks (one stack per counter).

It appears to be a sample or proof of concept. The intended audience is not documented.

## Scope

### In scope

- Rendering the React app into `ReactRoot_cc`.
- Reading and writing the configurator components `Cnt1`, `Cnt2`, `Cnt3` and `Result`.
- Visualising those values in 2D (DOM) and 3D.

### Out of scope

Not documented. Needs verification.

## Configurator link

`cbn.config.json` links company `CBNHOF`, configurator `REACTPG`.

# Part 2: Coding specifics

## Stack

- **Language:** TypeScript, ES modules, target ES2024, running in the browser.
- **UI framework:** React 19, rendered with `createRoot` inside `StrictMode` (`src/react-root.tsx`).
- **UI components:** MUI with emotion. Only a few components are used, plus a custom `ThemeProvider` theme.
- **Styling:** Tailwind CSS 4 utility classes. Colour and font tokens are CSS variables in `src/theme/styles.css`. `src/theme/mui-theme.ts` maps the MUI theme to the same variables.
- **Build:** Vite. CSS is injected into the JS bundle.
- Versions are in `package.json`. Check it before proposing a dependency change.

## Commands

- `npm run dev` – Vite plus `tsc --watch`
- `npm run build` / `npm run build:dev` – `check-code`, then `vite build`
- `npm run check-code` – `eslint` and `tsc`
- `npm run format` – Prettier
- There is no test script and no test files were found.

## Structure and conventions

- `src/index.ts` is the entry point. It calls `renderReactRoot()`.
- `src/components/` holds React components, grouped by feature (`2d/`, `3d/`, `counter/`).
- `src/hooks/` holds hooks. Configurator values are read with `useCmpValue` (`src/hooks/use-cmp-value.ts`) rather than calling the SDK subscription directly.
- File names are kebab-case. Components are function components in `.tsx` files.
- The 3D viewer is created and destroyed in a `useEffect` (`src/components/3d/view-3d.tsx`).
- `src/typings/cfgr-defs.generated.ts` is generated. Never edit it by hand.

## Constraints

- The SDK is installed from a local release-candidate tarball (`combeenation-custom-code-sdk-0.0.1-rc4-cmp-unsubscribe.tgz`). `useCmpValue` relies on its unsubscribe support. Do not replace or upgrade it without asking.
- ESLint covers only `src/**/*.ts` and ignores the generated file, so `.tsx` files are not linted.

## Documentation index

- Platform description (read-only, identical in every project): `.ai/platform/capabilities.md` and `.ai/platform/libraries.md`
- No specifications, ADRs or glossary exist yet.

## Open questions

Keep unresolved questions here until they are answered. Do not treat an assumption as an accepted requirement.

- Who maintains this project, and what is it for? — Needs verification — Open
- Will the local SDK tarball be replaced by a published version? — Needs verification — Open
- Should `.tsx` files be linted (current ESLint config covers only `.ts`)? — Needs verification — Open
- Should tests be added, and with which framework? — Needs verification — Open
