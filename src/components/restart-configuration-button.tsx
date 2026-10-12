import { RestartIcon } from '../icons';
import { restartConfiguration } from '@combeenation/custom-code-sdk';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import type { ReactElement } from 'react';

export function RestartConfigurationButton(): ReactElement {
  return (
    <Tooltip title="Restart configuration" arrow>
      <IconButton aria-label="Restart configuration" onClick={() => restartConfiguration()} size="small">
        <img alt="" aria-hidden="true" src={RestartIcon} className="block h-4 w-4" />
      </IconButton>
    </Tooltip>
  );
}
