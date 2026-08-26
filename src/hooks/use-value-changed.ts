import { ValueComponent } from '@combeenation/custom-code-sdk';
import { useEffect, useState } from 'react';

export function useValueChanged(component: ValueComponent<string, number>): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    component.onValueChanged(nextValue => {
      console.log(component, nextValue);
      setValue(nextValue ?? 0);
    }, true);

    return (): void => {
      // TODO: Unsubscribe callback is missing, leading to problems => API not available ATM
      // - double execution due to strict mode
      // - accumulating callbacks when component is unmounted and mounted again
      // component.offValueChanged();
    };
  }, [component]);

  return value;
}
