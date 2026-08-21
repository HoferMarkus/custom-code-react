import { useEffect, useState } from 'react';

type NumericValueComponent = {
  onValueChanged(listener: (value: number | undefined) => void, callImmediately?: boolean): void;
};

export function useValueChanged(component: NumericValueComponent) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    component.onValueChanged(nextValue => setValue(nextValue ?? 0), true);
  }, [component]);

  return value;
}
