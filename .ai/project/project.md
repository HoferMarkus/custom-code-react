# Project description

> Scope: This project only. Platform capabilities, approved libraries and coding rules are in the `combeenation-cpq` and `apply-coding-guidelines` skills. Do not restate them here.
> Last reviewed: 2026-10-13

## Product

- Demo configurator for Combeenation custom code, built as a React app.
- Visualises four counter values (`Cnt1`–`Cnt4`) and their sum (`Result`) in a 2D rectangle view and a 3D cube view.
- Linked to company `CBNHOF`, configurator `REACTPG` (`cbn.config.json`).
- Demo only. It is never deployed to production.

## Stack

- React 19, MUI 9 (Emotion), Tailwind 4 (`@tailwindcss/vite`), TypeScript 6, Vite 8. Versions are in `package.json`.
- 3D rendering with `@combeenation/3d-viewer`.
- CSS is injected into the single `cfgr.js` bundle (`vite-plugin-css-injected-by-js`).
- ESLint covers `src/**/*.{ts,tsx}` and ignores `cfgr-defs.generated.ts` (`eslint.config.mjs`).

## Architecture

- `src/index.ts` calls `renderReactRoot()` in `src/react-root.tsx`. It mounts `<App />` into the `ReactRoot_cc` custom control, wrapped in `StrictMode` and the MUI `ThemeProvider`.
- `src/components/app.tsx` lays out the counters, `Result`, `View2D`, `View3D` and the restart button.
- Each view subscribes to the counters itself through `src/hooks/use-cmp-value.ts`. There is no shared store.
- 3D: `use-viewer-setup.ts` owns the viewer lifecycle, `use-draw-cube-stacks.ts` syncs cube meshes to the counter values, `use-cube-anchors.ts` provides HTML anchors that `view-3d.tsx` fills through portals, and `cube-layout.ts` holds the geometry.

## Structure

- `src/components/`: grouped by feature (`2d/`, `3d/`, `counter/`), shared components at the top level.
- `src/hooks/`: hooks used across features.
- `src/icons/`: SVGs in `svg/`, re-exported from `index.ts`.
- `src/theme/`: `mui-theme.ts` and `styles.css`.
- `src/typings/`: generated typings. Never edited by hand.

## Conventions

- kebab-case file names, one component or hook per file. Naming prefixes follow the platform coding guidelines.
- Tailwind is used for layout and colours, MUI for interactive components (buttons, tooltips, checkboxes). This is intentional.
- Colours are defined once as CSS variables in `styles.css`, exposed as Tailwind theme colours and mirrored in `mui-theme.ts`.

## Constraints

- `@combeenation/custom-code-sdk` is a local tarball (`combeenation-custom-code-sdk-0.0.1-rc4-cmp-unsubscribe.tgz`). This is accepted because the project is demo only. `use-cmp-value.ts` depends on its `unsubscribe` support.
- Dependency pinning (exact versus `^`) has no specific reason.

## Open questions

None.
