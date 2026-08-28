import { useValueChanged } from '../hooks/use-value-changed';
import { CounterButton } from './counter-button';
import { ValueComponent } from '@combeenation/custom-code-sdk';

export const CounterControl = ({ component }: { component: ValueComponent<string, number> }) => {
  const count = useValueChanged(component);

  return (
    <div className="bg-primary-color border-secondary-color relative flex flex-col gap-4 rounded-xl border p-4">
      <span className="text-primary-font-color text-x-large text-center">{component.name}</span>
      <div className="flex items-center justify-between gap-2">
        <CounterButton ariaLabel="Decrement counter" onClick={() => component.setInput(count - 1)}>
          -
        </CounterButton>
        <span className="text-primary-font-color text-center">{count}</span>
        <CounterButton ariaLabel="Increment counter" onClick={() => component.setInput(count + 1)}>
          +
        </CounterButton>
      </div>
    </div>
  );
};
