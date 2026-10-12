import { CUBE_WIDTH, getCubeCenter } from './cube-layout';
import { Vector3, Viewer } from '@combeenation/3d-viewer';
import { useEffect, useRef, useState } from 'react';

export type CubeAnchor = { name: string; element: HTMLDivElement; cubeIndex: number };

// Keeps the anchor in front of the face so the occlusion check does not hit the cube itself.
const _ANCHOR_OFFSET_Z = 0.05;

function _syncCubeAnchors(viewer: Viewer, cubeCounts: number[], anchors: Map<string, CubeAnchor>): void {
  const wantedNames = new Set<string>();

  cubeCounts.forEach((cubeCount, stackIndex) => {
    for (let cubeIndex = 0; cubeIndex < cubeCount; cubeIndex += 1) {
      const name = `counter-cube-anchor-${stackIndex}-${cubeIndex}`;

      wantedNames.add(name);
      if (anchors.has(name)) {
        continue;
      }

      const element = document.createElement('div');
      const { x, y } = getCubeCenter(stackIndex, cubeIndex);

      viewer.htmlAnchorManager.addHtmlAnchor(name, element, new Vector3(x, y, CUBE_WIDTH / 2 + _ANCHOR_OFFSET_Z), {
        group: 'counter-cube',
        enablePointerEvents: true,
        occlusion: { hideIfOccluded: true },
      });
      anchors.set(name, { name, element, cubeIndex });
    }
  });

  anchors.forEach((_anchor, name) => {
    if (!wantedNames.has(name)) {
      viewer.htmlAnchorManager.removeHtmlAnchor(name);
      anchors.delete(name);
    }
  });
}

/** `cubeCounts` must be referentially stable between renders (e.g. memoized). */
export function useCubeAnchors(viewer: Viewer | null, cubeCounts: number[]): CubeAnchor[] {
  const anchorsRef = useRef(new Map<string, CubeAnchor>());
  const [anchors, setAnchors] = useState<CubeAnchor[]>([]);

  useEffect(() => {
    const currentAnchors = anchorsRef.current;

    return (): void => {
      currentAnchors.clear();
      setAnchors([]);
    };
  }, [viewer]);

  useEffect(() => {
    if (!viewer) {
      return;
    }

    _syncCubeAnchors(viewer, cubeCounts, anchorsRef.current);
    setAnchors([...anchorsRef.current.values()]);
  }, [viewer, cubeCounts]);

  return anchors;
}
