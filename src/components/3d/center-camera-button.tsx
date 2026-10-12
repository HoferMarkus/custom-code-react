import { CenterCameraIcon } from '../../icons';
import { Viewer } from '@combeenation/3d-viewer';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import type { ReactElement } from 'react';

export function CenterCameraButton({ viewer }: { viewer: Viewer | null }): ReactElement {
  return (
    <Tooltip title="Center camera" arrow>
      <IconButton aria-label="Center camera" onClick={() => viewer?.cameraManager.autofocusActiveCamera()} size="small">
        <img alt="" aria-hidden="true" src={CenterCameraIcon} className="block h-4 w-4" />
      </IconButton>
    </Tooltip>
  );
}
