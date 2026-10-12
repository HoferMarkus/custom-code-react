import { useCmpValue } from '../../hooks/use-cmp-value';
import { MinusIcon, PlusIcon } from '../../icons';
import { CounterButton } from './counter-button';
import { ValueComponent } from '@combeenation/custom-code-sdk';
import type { ReactElement } from 'react';

export const CounterControl = ({ component }: { component: ValueComponent<string, number> }): ReactElement => {
  const count = useCmpValue(component, 0, 'CounterControl');

  return (
    <div className="bg-primary-color border-secondary-color relative flex flex-col gap-4 rounded-xl border p-4">
      <span className="text-primary-font-color text-x-large text-center">{component.name}</span>
      <div className="flex items-center justify-between gap-2">
        <CounterButton ariaLabel="Decrement counter" onClick={() => component.setInput(count - 1)}>
          <img alt="" aria-hidden="true" src={MinusIcon} />
        </CounterButton>
        <span className="text-primary-font-color text-center">{count}</span>
        <CounterButton ariaLabel="Increment counter" onClick={() => component.setInput(count + 1)}>
          <img alt="" aria-hidden="true" src={PlusIcon} />
        </CounterButton>
      </div>
    </div>
  );
};
