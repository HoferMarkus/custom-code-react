import { Cnt1, Cnt2, Cnt3 } from '../../typings/cfgr-defs.generated';
import { RectangleStack } from './rectangle-stack';
import { JSX } from 'react/jsx-runtime';

export function View2D(): JSX.Element {
  const stacks = [
    { component: Cnt1, colorClassName: 'bg-primary-color' },
    { component: Cnt2, colorClassName: 'bg-secondary-color' },
    { component: Cnt3, colorClassName: 'bg-light-red-color' },
  ];

  return (
    <div className="flex gap-4">
      {stacks.map(({ component, colorClassName }) => (
        <RectangleStack key={component.name} component={component} colorClassName={colorClassName} />
      ))}
    </div>
  );
}
