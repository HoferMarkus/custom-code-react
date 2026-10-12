import { useCmpValue } from '../hooks/use-cmp-value';
import { Cnt1, Cnt2, Cnt3 } from '../typings/cfgr-defs.generated';

export const Result = () => {
  const cnt1 = useCmpValue(Cnt1, 0, 'Result');
  const cnt2 = useCmpValue(Cnt2, 0, 'Result');
  const cnt3 = useCmpValue(Cnt3, 0, 'Result');
  const total = cnt1 + cnt2 + cnt3;

  return <span className="text-x-large text-primary-font-color mb-4 self-end">{`= ${total}`}</span>;
};
