import { ScreenshotIcon } from '../../icons';
import { Viewer } from '@combeenation/3d-viewer';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import type { ReactElement } from 'react';

const _SCREENSHOT_FILE_NAME = 'counter-cubes.png';

async function _downloadScreenshot(viewer: Viewer): Promise<void> {
  // Without alpha, beta and radius the viewer uses the active camera. With `fileName` it downloads the image.
  await viewer.cameraManager.createScreenshot({ fileName: _SCREENSHOT_FILE_NAME });
}

export function ScreenshotButton({ viewer }: { viewer: Viewer | null }): ReactElement {
  return (
    <Tooltip title="Download screenshot" arrow>
      <IconButton aria-label="Download screenshot" onClick={() => viewer && _downloadScreenshot(viewer)} size="small">
        <img alt="" aria-hidden="true" src={ScreenshotIcon} className="block h-4 w-4" />
      </IconButton>
    </Tooltip>
  );
}
