import { useCmpValue } from '../../hooks/use-cmp-value';
import { Cnt1, Cnt2, Cnt3, Cnt4 } from '../../typings/cfgr-defs.generated';
import { CUBE_HEIGHT, CUBE_WIDTH, getCubeCenter } from './cube-layout';
import { CubeAnchor, useCubeAnchors } from './use-cube-anchors';
import { Color3, MeshBuilder, PBRMaterial, Viewer } from '@combeenation/3d-viewer';
import { useEffect, useMemo, useRef } from 'react';

const _CUBE_COLORS = ['#ffd119', '#677752', '#e07f76', '#636d70'];
// Strict pattern so html anchor meshes (`counter-cube-anchor-...`) are never matched.
const _CUBE_MESH_NAME_PATTERN = /^counter-cube-\d+-\d+$/;

function _getOrCreateMaterial(viewer: Viewer, stackIndex: number): PBRMaterial {
  const name = `counter-cube-material-${stackIndex}`;
  const existing = viewer.scene.getMaterialByName(name);

  if (existing) {
    return existing as PBRMaterial;
  }

  const material = new PBRMaterial(name, viewer.scene);

  material.albedoColor = Color3.FromHexString(_CUBE_COLORS[stackIndex]);
  material.metallic = 0;
  material.roughness = 0.65;
  return material;
}

/** Returns `true` if cubes were added or removed. */
function _drawCubeStacks(viewer: Viewer, cubeCounts: number[]): boolean {
  const wantedNames = new Set<string>();
  let changed = false;

  cubeCounts.forEach((cubeCount, stackIndex) => {
    for (let cubeIndex = 0; cubeIndex < cubeCount; cubeIndex += 1) {
      const name = `counter-cube-${stackIndex}-${cubeIndex}`;

      wantedNames.add(name);
      if (viewer.scene.getMeshByName(name)) {
        continue;
      }

      const cube = MeshBuilder.CreateBox(
        name,
        { width: CUBE_WIDTH, height: CUBE_HEIGHT, depth: CUBE_WIDTH },
        viewer.scene
      );
      const { x, y } = getCubeCenter(stackIndex, cubeIndex);

      cube.position.x = x;
      cube.position.y = y;
      cube.material = _getOrCreateMaterial(viewer, stackIndex);
      changed = true;
    }
  });

  viewer.scene.meshes
    .filter(mesh => _CUBE_MESH_NAME_PATTERN.test(mesh.name) && !wantedNames.has(mesh.name))
    .forEach(mesh => {
      mesh.dispose();
      changed = true;
    });

  return changed;
}

export function useDrawCubeStacks(viewer: Viewer | null): CubeAnchor[] {
  const cnt1CubeCount = Math.max(0, Math.floor(useCmpValue(Cnt1, 0, '3d')));
  const cnt2CubeCount = Math.max(0, Math.floor(useCmpValue(Cnt2, 0, '3d')));
  const cnt3CubeCount = Math.max(0, Math.floor(useCmpValue(Cnt3, 0, '3d')));
  const cnt4CubeCount = Math.max(0, Math.floor(useCmpValue(Cnt4, 0, '3d')));
  const cubeCounts = useMemo(
    () => [cnt1CubeCount, cnt2CubeCount, cnt3CubeCount, cnt4CubeCount],
    [cnt1CubeCount, cnt2CubeCount, cnt3CubeCount, cnt4CubeCount]
  );

  const focusedViewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    if (!viewer) {
      return;
    }

    const changed = _drawCubeStacks(viewer, cubeCounts);

    // Focus once per viewer so later stack changes keep the user's camera position.
    if (changed && focusedViewerRef.current !== viewer) {
      focusedViewerRef.current = viewer;
      viewer.cameraManager.autofocusActiveCamera();
    }
  }, [viewer, cubeCounts]);

  return useCubeAnchors(viewer, cubeCounts);
}
