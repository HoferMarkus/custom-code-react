import { InfoIcon } from '../../icons';
import { useDrawCubeStacks } from './use-draw-cube-stacks';
import { useViewerSetup } from './use-viewer-setup';
import Tooltip from '@mui/material/Tooltip';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { JSX } from 'react/jsx-runtime';

export function View3D(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewer = useViewerSetup(canvasRef);
  const anchors = useDrawCubeStacks(viewer);

  return (
    <>
      <canvas ref={canvasRef} className="h-full w-full" aria-label="3D cube viewer" />
      {anchors.map(({ name, element, cubeIndex }) =>
        createPortal(
          <Tooltip title={String(cubeIndex)} arrow>
            <img alt="" src={InfoIcon} className="block h-4 w-4 cursor-help" />
          </Tooltip>,
          element,
          name
        )
      )}
    </>
  );
}
