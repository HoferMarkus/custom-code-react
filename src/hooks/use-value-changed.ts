import { ValueComponent } from '@combeenation/custom-code-sdk';
import { useEffect, useState } from 'react';

export function useValueChanged(component: ValueComponent<string, number>): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const valueChangedProm = component.onValueChanged(nextValue => {
      console.log(component, nextValue);
      setValue(nextValue ?? 0);
    }, true);

    return (): void => {
      // NOTE: only works with local `CbnSdk` in `spike/unsubscribe-cmp-listener branch`
      async function unsubscribeValueChanged(): Promise<void> {
        (await valueChangedProm).unsubscribe();
      }
      unsubscribeValueChanged();
    };
  }, [component]);

  return value;
}
