import { useValueChanged } from '../hooks/use-value-changed';
import { CounterControl } from './counter-control';
import { ValueComponent } from '@combeenation/custom-code-sdk';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';

export const CounterControlStack = ({ component }: { component: ValueComponent<string, number> }) => {
  const [render, setRender] = useState(true);

  return (
    <div className="flex w-36 flex-col gap-4">
      <FormControlLabel
        control={<Checkbox checked={render} onChange={() => setRender(!render)} />}
        label={<span className="text-primary-font-color">Show</span>}
      />
      {render && <CounterControl component={component} />}
    </div>
  );
};
