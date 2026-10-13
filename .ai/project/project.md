# Project context

Project-specific information: the product and the coding specifics of this repository. Platform behaviour (SDK, 3D viewer, entry point) is described in `.ai/system/system.md` and must not be restated or changed here. Project terms are in `glossary.md` next to this file.

> Maintainer: markus.hofer@combeenation.com  
> Last reviewed: 2026-10-12

# Part 1: Product

## Purpose

Counter demo built as Combeenation custom code. A React UI is rendered into the `ReactRoot_cc` custom control. It shows four counter controls bound to the number components `Cnt1`, `Cnt2`, `Cnt3` and `Cnt4`, a `Result` value, a 2D view of rectangle stacks and a 3D view of cube stacks (one stack per counter).

It is a demo project.

## Scope

### In scope

- Rendering the React app into `ReactRoot_cc`.
- Reading and writing the configurator components `Cnt1`, `Cnt2`, `Cnt3`, `Cnt4` and `Result`.
- Visualising those values in 2D (DOM) and 3D.

### Out of scope

Not documented.

# Part 2: Coding specifics

## Stack

- **UI framework:** React 19, rendered with `createRoot` inside `StrictMode` (`src/react-root.tsx`).
- **UI components:** MUI with emotion. Only a few components are used, plus a custom `ThemeProvider` theme.
- **Styling:** Tailwind CSS 4 utility classes. Colour and font tokens are CSS variables in `src/theme/styles.css`. `src/theme/mui-theme.ts` maps the MUI theme to the same variables.
- Versions are in `package.json`. Check it before proposing a dependency change.

## Testing

There are no tests and none are planned.

## Structure and conventions

- `src/components/` holds React components, grouped by feature (`2d/`, `3d/`, `counter/`).
- `src/hooks/` holds shared hooks. Configurator values are read with `useCmpValue` (`src/hooks/use-cmp-value.ts`) rather than calling the SDK subscription directly. Feature-specific hooks sit next to their components (for example in `src/components/3d/`).
- File names are kebab-case. Components are function components in `.tsx` files.
- The 3D view (`src/components/3d/`) is split by role:
  - `use-viewer-setup.ts` creates and destroys the viewer.
  - `use-draw-cube-stacks.ts` draws the cube meshes.
  - `use-cube-anchors.ts` manages the HTML anchors.
  - `screenshot-button.tsx` downloads a PNG of the scene from the current camera position via `cameraManager.createScreenshot`.
  - `center-camera-button.tsx` re-centres the camera on the scene via `cameraManager.autofocusActiveCamera`. The camera is focused automatically only once per viewer, so later counter changes keep the user's view.
  - `cube-layout.ts` holds the layout maths.
- Every cube has an HTML anchor on its front face (viewer HTML anchor feature). `view-3d.tsx` renders the content of each anchor with `createPortal`, currently an info icon whose tooltip shows the cube index. This is a demo detail.
- 3D names are index based: meshes are `counter-cube-<stack>-<cube>` and anchors `counter-cube-anchor-<stack>-<cube>`. Match mesh names with the strict pattern in `use-draw-cube-stacks.ts` so anchors are never mistaken for cubes.

## Constraints

- The SDK is installed from a local release-candidate tarball (`combeenation-custom-code-sdk-0.0.1-rc4-cmp-unsubscribe.tgz`). This is temporary: it will be replaced once a version is published, and a local build must not be used in production. Until then, `useCmpValue` relies on its unsubscribe support. Do not replace or upgrade it without asking.

## Documentation index

- Platform description (read-only, identical in every project): `.ai/system/system.md`, `.ai/system/coding-guidelines.md` and `.ai/system/glossary.md`
- Project glossary: `.ai/project/glossary.md`
- No specifications or ADRs exist yet.

## Open questions

Keep unresolved questions here until they are answered. Do not treat an assumption as an accepted requirement.

None.
