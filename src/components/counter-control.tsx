import { useValueChanged } from '../hooks/use-value-changed';
import { Cnt1, Cnt2, Cnt3 } from '../typings/cfgr-defs.generated';
import { CounterButton } from './counter-button';
import classNames from 'classnames';

type CounterComponent = typeof Cnt1 | typeof Cnt2 | typeof Cnt3;

type CounterControlProps = {
  component: CounterComponent;
};

export function CounterControl({ component }: CounterControlProps) {
  const count = useValueChanged(component);

  return (
    <div className={'flex flex-col items-center gap-4 rounded-xl border border-amber-500 bg-amber-50 p-4'}>
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
}
