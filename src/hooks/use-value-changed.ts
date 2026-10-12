import { ValueComponent } from '@combeenation/custom-code-sdk';
import { useEffect, useState } from 'react';

export function useCmpValue<TValue>(
  component: ValueComponent<string, TValue>,
  initialValue: TValue,
  consumer: string
): TValue {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const valueChangedProm = component.onValueChanged(nextValue => {
      console.log('Value changed', component.name, consumer, nextValue);
      setValue(nextValue ?? initialValue);
    }, true);

    return (): void => {
      // NOTE: only works with local `CbnSdk` in `spike/unsubscribe-cmp-listener branch`
      async function unsubscribeValueChanged(): Promise<void> {
        const prom = await valueChangedProm;
        const unsubscribe = prom?.unsubscribe;

        if (unsubscribe) {
          console.log('Unsubscribing', component.name, consumer);
          unsubscribe();
        }
      }
      unsubscribeValueChanged();
    };
  }, [component]);

  return value;
}
