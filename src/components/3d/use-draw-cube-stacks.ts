import { useValueChanged } from '../../hooks/use-value-changed';
import { Cnt1, Cnt2, Cnt3 } from '../../typings/cfgr-defs.generated';
import { Color3, MeshBuilder, PBRMaterial, Viewer } from '@combeenation/3d-viewer';
import { useEffect } from 'react';

const cubeColors = ['#ffd119', '#677752', '#e07f76'];
const cubeWidth = 2;
const cubeHeight = cubeWidth / 6;
const cubeGap = cubeHeight / 6;

function drawCubeStacks(viewer: Viewer, cubeCounts: number[]): void {
  viewer.scene.meshes.filter(mesh => mesh.name.startsWith('counter-cube-')).forEach(mesh => mesh.dispose());
  viewer.scene.materials
    .filter(material => material.name.startsWith('counter-cube-material-'))
    .forEach(material => material.dispose());

  const materials = cubeColors.map((color, stackIndex) => {
    const material = new PBRMaterial(`counter-cube-material-${stackIndex}`, viewer.scene);

    material.albedoColor = Color3.FromHexString(color);
    material.metallic = 0;
    material.roughness = 0.65;
    return material;
  });

  cubeCounts.forEach((cubeCount, stackIndex) => {
    for (let cubeIndex = 0; cubeIndex < cubeCount; cubeIndex += 1) {
      const cube = MeshBuilder.CreateBox(
        `counter-cube-${stackIndex}-${cubeIndex}`,
        { width: cubeWidth, height: cubeHeight, depth: cubeWidth },
        viewer.scene
      );

      cube.position.x = (stackIndex - 1) * 3;
      cube.position.y = cubeIndex * (cubeHeight + cubeGap) + cubeHeight / 2;
      cube.material = materials[stackIndex];
    }
  });

  viewer.cameraManager.autofocusActiveCamera();
}

export function useDrawCubeStacks(viewer: Viewer | null): void {
  const cnt1CubeCount = Math.max(0, Math.floor(useValueChanged(Cnt1)));
  const cnt2CubeCount = Math.max(0, Math.floor(useValueChanged(Cnt2)));
  const cnt3CubeCount = Math.max(0, Math.floor(useValueChanged(Cnt3)));

  useEffect(() => {
    if (!viewer) {
      return;
    }

    drawCubeStacks(viewer, [cnt1CubeCount, cnt2CubeCount, cnt3CubeCount]);
  }, [cnt1CubeCount, cnt2CubeCount, cnt3CubeCount, viewer]);
}
