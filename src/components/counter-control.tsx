import { useValueChanged } from '../hooks/use-value-changed';
import { CounterButton } from './counter-button';
import { ValueComponent } from '@combeenation/custom-code-sdk';

export const CounterControl = ({ component }: { component: ValueComponent<string, number> }) => {
  const count = useValueChanged(component);

  return (
    <div className={'flex flex-col items-center gap-4 rounded-xl border border-amber-500 bg-amber-100 p-4'}>
      <span className="text-2xl">{component.name}</span>
      <div className="flex items-center gap-2">
        <CounterButton ariaLabel="Decrement counter" onClick={() => component.setInput(count - 1)}>
          -
        </CounterButton>
        <span className="min-w-6 text-center">{count}</span>
        <CounterButton ariaLabel="Increment counter" onClick={() => component.setInput(count + 1)}>
          +
        </CounterButton>
      </div>
    </div>
  );
};
