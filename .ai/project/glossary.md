# Project glossary

Terms specific to this project. Platform terms (configurator, `ValueComponent`, `CustomControl` and so on) are in `.ai/system/glossary.md` and must not be repeated here.

| Term           | Definition                                                                                                                                            |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Counter        | One of the number components `Cnt1`, `Cnt2` and `Cnt3`, each with its own counter control in the UI.                                                  |
| Result         | The number component `Result`, shown next to the counters.                                                                                            |
| Stack          | The visual column that belongs to one counter. Rectangles in 2D, cubes in 3D.                                                                         |
| Cube           | One element of a 3D stack. Named `counter-cube-<stack>-<cube>`.                                                                                       |
| Anchor         | An HTML anchor on the front face of a cube. Named `counter-cube-anchor-<stack>-<cube>`. Its content is rendered with `createPortal` in `view-3d.tsx`. |
| `ReactRoot_cc` | The custom control the React app is rendered into.                                                                                                    |
| Centre camera  | Button that re-centres the 3D camera on the scene. The camera is otherwise focused only once per viewer.                                              |
