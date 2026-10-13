# Project glossary

> Scope: This project only. Platform terms are in `glossary.md` of the `combeenation-cpq` skill.
> Last reviewed: 2026-10-13

| Term           | Definition                                                                                                      |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| `ReactRoot_cc` | The custom control the React app is mounted into (`react-root.tsx`).                                            |
| `Cnt1`–`Cnt4`  | The four counter `ValueComponent<number>`s. Each is one stack in the 2D and 3D views.                           |
| `Result`       | Read-only `ValueComponent<number>` shown next to the counters. Imported as `ResultCmp` in `result.tsx`.         |
| `useCmpValue`  | Hook in `src/hooks/use-cmp-value.ts` that subscribes a component to React state and unsubscribes on cleanup.    |
| `View2D`       | Rectangle stacks, one per counter (`src/components/2d/`).                                                       |
| `View3D`       | 3D viewer with one cube stack per counter (`src/components/3d/`).                                               |
| Cube stack     | The meshes `counter-cube-<stack>-<cube>` in the 3D scene, drawn by `use-draw-cube-stacks.ts`.                   |
| Anchor         | HTML anchor mesh on a cube (`counter-cube-anchor-...`) that hosts a React portal with an info icon and tooltip. |
