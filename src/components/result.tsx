import { useCmpValue } from '../hooks/use-cmp-value';
import { Result as ResultCmp } from '../typings/cfgr-defs.generated';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';

const ResultValue = () => {
  const result = useCmpValue(ResultCmp, 0, 'Result');

  return <span className="text-x-large text-primary-font-color mt-22">{`= ${result}`}</span>;
};

export const Result = () => {
  const [render, setRender] = useState(true);

  return (
    <div className="flex flex-col">
      <FormControlLabel
        control={<Checkbox checked={render} onChange={() => setRender(!render)} />}
        label={<span className="text-primary-font-color">Show</span>}
      />
      {render && <ResultValue />}
    </div>
  );
};
