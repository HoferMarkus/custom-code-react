import { InfoIcon } from '../../icons';
import { CenterCameraButton } from './center-camera-button';
import { ScreenshotButton } from './screenshot-button';
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
    // Flex keeps the viewer's absolutely positioned HTML anchors (inserted after the canvas) at the top-left origin.
    <div className="relative flex h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full" aria-label="3D cube viewer" />
      {/* Positioned on a wrapper, because MUI's ButtonBase sets its own `position: relative`. */}
      <div className="absolute top-2 right-2 flex flex-col gap-1">
        <ScreenshotButton viewer={viewer} />
        <CenterCameraButton viewer={viewer} />
      </div>
      {anchors.map(({ name, element, cubeIndex }) =>
        createPortal(
          <Tooltip title={String(cubeIndex)} arrow>
            <img alt="" src={InfoIcon} className="block h-4 w-4 cursor-help" />
          </Tooltip>,
          element,
          name
        )
      )}
    </div>
  );
}
