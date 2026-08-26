import { useValueChanged } from '../hooks/use-value-changed';
import { CounterControl } from './counter-control';
import { ValueComponent } from '@combeenation/custom-code-sdk';

export const CounterControlStack = ({ component }: { component: ValueComponent<string, number> }) => {
  const val = useValueChanged(component);

  return (
    <div className="flex flex-col gap-4">
      <CounterControl component={component} />
      {val >= 10 && <CounterControl component={component} />}
    </div>
  );
};
