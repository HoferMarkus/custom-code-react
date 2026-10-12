# Project context

Project-specific information: the product and the coding specifics of this repository. Platform behaviour (SDK, 3D viewer, entry point) is described in `.ai/system.md` and must not be restated or changed here.

> Maintainer: markus.hofer@combeenation.com  
> Last reviewed: 2026-10-12

# Part 1: Product

## Purpose

Counter demo built as Combeenation custom code. A React UI is rendered into the `ReactRoot_cc` custom control. It shows three counter controls bound to the number components `Cnt1`, `Cnt2` and `Cnt3`, a `Result` value, a 2D view of rectangle stacks and a 3D view of cube stacks (one stack per counter).

It is a demo project.

## Scope

### In scope

- Rendering the React app into `ReactRoot_cc`.
- Reading and writing the configurator components `Cnt1`, `Cnt2`, `Cnt3` and `Result`.
- Visualising those values in 2D (DOM) and 3D.

### Out of scope

Not documented.

# Part 2: Coding specifics

## Stack

- **Language:** TypeScript, ES modules, target ES2024, running in the browser.
- **UI framework:** React 19, rendered with `createRoot` inside `StrictMode` (`src/react-root.tsx`).
- **UI components:** MUI with emotion. Only a few components are used, plus a custom `ThemeProvider` theme.
- **Styling:** Tailwind CSS 4 utility classes. Colour and font tokens are CSS variables in `src/theme/styles.css`. `src/theme/mui-theme.ts` maps the MUI theme to the same variables.
- Versions are in `package.json`. Check it before proposing a dependency change.

## Testing

There are no tests and none are planned.

## Structure and conventions

- `src/index.ts` calls `renderReactRoot()`.
- `src/components/` holds React components, grouped by feature (`2d/`, `3d/`, `counter/`).
- `src/hooks/` holds hooks. Configurator values are read with `useCmpValue` (`src/hooks/use-cmp-value.ts`) rather than calling the SDK subscription directly.
- File names are kebab-case. Components are function components in `.tsx` files.
- The 3D viewer is created and destroyed in a `useEffect` (`src/components/3d/view-3d.tsx`).

## Constraints

- The SDK is installed from a local release-candidate tarball (`combeenation-custom-code-sdk-0.0.1-rc4-cmp-unsubscribe.tgz`). This is temporary: it will be replaced once a version is published, and a local build must not be used in production. Until then, `useCmpValue` relies on its unsubscribe support. Do not replace or upgrade it without asking.

## Documentation index

- Platform description (read-only, identical in every project): `.ai/system.md` and `.ai/coding-guidelines.md`
- No specifications, ADRs or glossary exist yet.

## Open questions

Keep unresolved questions here until they are answered. Do not treat an assumption as an accepted requirement.

None.
