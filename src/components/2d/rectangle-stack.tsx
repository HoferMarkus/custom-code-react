import { useValueChanged } from '../../hooks/use-value-changed';
import { ValueComponent } from '@combeenation/custom-code-sdk';
import { JSX } from 'react/jsx-runtime';

type RectangleStackProps = {
  component: ValueComponent<string, number>;
  colorClassName: string;
};

export function RectangleStack({ component, colorClassName }: RectangleStackProps): JSX.Element {
  const value = useValueChanged(component);
  const rectangleCount = Math.max(0, Math.floor(value));

  return (
    <div className="flex w-36 flex-col gap-1">
      {Array.from({ length: rectangleCount }, (_, rectangleIndex) => (
        <div key={rectangleIndex} className={`border-primary-font-color h-6 w-full border ${colorClassName}`} />
      ))}
    </div>
  );
}
