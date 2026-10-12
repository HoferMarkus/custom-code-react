# Developer platform capabilities

> Scope: Platform description. Identical in every project and owned by the platform team. Do not edit or adapt it inside a project.  
> Owner: Needs verification  
> Last verified: Draft. Derived from a reference project (`custom-code-react`) on 2026-10-12 and not yet confirmed by the platform owner.

This document records capabilities of the organization's developer platform. Project-specific content (product, framework, conventions) belongs in `.ai/project.md`. Do not treat an unfilled section as proof that a capability exists or is supported.

## How to use this document

- Prefer information confirmed by platform documentation or the responsible platform team.
- Link to authoritative internal documentation where possible.
- Mark uncertain items as **Needs verification**.
- Record limitations and constraints, not only happy-path examples.
- Update the verification date when checking a capability.

## Reference documentation

- Combeenation platform: <https://docs.combeenation.com/>
- Custom code SDK API: <https://custom-code.docs.combeenation.com/>
- 3D viewer: <https://3dviewer.docs.combeenation.com/>

Consult these when this file is silent. The entries below have not yet been checked against them.

## Capability catalogue

Support status is **Needs verification** throughout because it has not been confirmed against platform documentation. The linked Combeenation docs were not reviewed.

### Custom code entry point

- **Purpose:** Runs project code once the configurator is ready.
- **Support status:** Needs verification
- **Approved use cases:** Initialisation and registering behaviour.
- **Constraints and limitations:** The entry file is `src/index.ts`. It runs after the configurator's controls are created and rendered and the product plan is loaded.
- **Configuration or prerequisites:** The build output must be a single ES module named `cfgr.js` with no extra chunks. Top-level await is supported.
- **Security considerations:** Needs verification
- **Recommended pattern:**

  ```ts
  async function initCfgr(): Promise<void> {
    // runs once the configurator is ready
  }
  initCfgr();
  ```

- **Authoritative documentation:** <https://docs.combeenation.com/docs/custom-code> (not reviewed)
- **Owner:** Needs verification
- **Last verified:** Not verified

### Custom control rendering (`CustomControl`)

- **Purpose:** Gives custom code a DOM element inside the configurator to render into. It does not depend on a UI framework.
- **Support status:** Needs verification
- **Approved use cases:** `control.render(element => { /* mount UI into element */ })`.
- **Constraints and limitations:** The control must exist in the configurator and be declared in the generated typings.
- **Configuration or prerequisites:** A `CustomControl` in the configurator.
- **Security considerations:** Needs verification
- **Recommended pattern:** Import the control from the generated typings and call `render`.
- **Authoritative documentation:** Needs verification
- **Owner:** Needs verification
- **Last verified:** Not verified

### Value components (`ValueComponent`)

- **Purpose:** Exchange values between custom code and configurator components.
- **Support status:** Needs verification
- **Approved use cases:**
  - `component.onValueChanged(callback, true)` to subscribe.
  - `component.setInput(value)` to write.
  - `component.name` to read the identifier.
- **Constraints and limitations:**
  - The meaning of the `true` argument to `onValueChanged` is not documented.
  - `onValueChanged` returns a promise whose result may expose `unsubscribe`. Availability depends on the SDK build.
- **Configuration or prerequisites:** The component must exist in the configurator and be declared in the generated typings. The value type is declared per component.
- **Security considerations:** Needs verification
- **Recommended pattern:** Subscribe on mount, unsubscribe on cleanup where supported.
- **Authoritative documentation:** <https://custom-code.docs.combeenation.com/> (not reviewed)
- **Owner:** Needs verification
- **Last verified:** Not verified

### Generated configurator typings

- **Purpose:** Typed handles (`ValueComponent`, `Panel`, `CustomControl`) named after the configurator's elements, plus data types and Zod schemas.
- **Support status:** Needs verification
- **Approved use cases:** Import components and controls from `src/typings/cfgr-defs.generated.ts` instead of constructing them by hand.
- **Constraints and limitations:**
  - The file is generated. Never edit it by hand and exclude it from linting.
  - The regeneration process is not documented.
  - It imports `zod`, which the SDK installs as a dependency.
- **Configuration or prerequisites:** `cbn.config.json` links the project to a company and configurator (`cfgrLinks.companies[].cfgrs[]`).
- **Security considerations:** Needs verification
- **Recommended pattern:** Needs verification
- **Authoritative documentation:** Needs verification
- **Owner:** Needs verification
- **Last verified:** Not verified

### 3D viewer

- **Purpose:** Renders a 3D scene on a canvas, using `@combeenation/3d-viewer` (which re-exports Babylon.js types).
- **Support status:** Needs verification
- **Approved use cases:**
  - `new Viewer(canvas, options)`
  - Building meshes and materials via `MeshBuilder` and `PBRMaterial`.
  - `viewer.cameraManager.autofocusActiveCamera()`
  - `viewer.engine.resize()` when the canvas size changes.
  - `viewer.destroy()` when the viewer is no longer needed.
- **Constraints and limitations:** Call `destroy()` to release resources. Anything else is Needs verification.
- **Configuration or prerequisites:** A `<canvas>` element.
- **Security considerations:** Needs verification
- **Recommended pattern:** Needs verification
- **Authoritative documentation:** <https://3dviewer.docs.combeenation.com/> (not reviewed)
- **Owner:** Needs verification
- **Last verified:** Not verified

### Build and sync tooling

- **Purpose:** Build the bundle and (presumably) sync it to the configurator.
- **Support status:** Needs verification
- **Approved use cases:** Vite with `@combeenation/vite-plugin-custom-code-sync`. The plugin's exact behaviour is not documented here.
- **Constraints and limitations:** The output is one ES module, `cfgr.js`, with dynamic imports inlined (`inlineDynamicImports: true`).
- **Configuration or prerequisites:** `cbn.config.json` and a Vite config that sets the entry to `src/index.ts`.
- **Security considerations:** Needs verification
- **Recommended pattern:** Needs verification
- **Authoritative documentation:** Needs verification
- **Owner:** Needs verification
- **Last verified:** Not verified

## Cross-cutting guidance

### Environments and deployment

- **Status:** Needs verification
- **Notes:** Target environments and the deployment path are not documented.

### Identity and access

- **Status:** Needs verification
- **Notes:** Not documented. The generated typings can include user and tenant data types, depending on the configurator.

### Observability and operations

- **Status:** Needs verification
- **Notes:** Not documented.

### Security and data handling

- **Status:** Needs verification
- **Notes:** Not documented.

## Coding conventions

Apply in every project.

- Module-level constants and `let`s: exported ones are `UPPER_SNAKE_CASE` (`CUBE_WIDTH`). Non-exported ones are `UPPER_SNAKE_CASE` with a `_` prefix (`_CUBE_GAP`).
- Non-exported functions are prefixed with `_` (`_syncCubeAnchors`).
- Components are never prefixed, whether exported or not. Hooks and generated files are exempt.

## Open questions

- What does the second argument of `onValueChanged` do? — Platform team — Ask
- Is unsubscribing supported in every published SDK release? — Platform team — Ask
- How are the generated typings regenerated? — Platform team — Ask
- What does `CbnCustomCodeSync` do, and how is `cfgr.js` deployed? — Platform team — Ask
