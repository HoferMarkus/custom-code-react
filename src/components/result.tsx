import { useValueChanged } from '../hooks/use-value-changed';
import { Cnt1, Cnt2, Cnt3 } from '../typings/cfgr-defs.generated';

export const Result = () => {
  const cnt1 = useValueChanged(Cnt1);
  const cnt2 = useValueChanged(Cnt2);
  const cnt3 = useValueChanged(Cnt3);
  const total = cnt1 + cnt2 + cnt3;

  return <span className="mb-4 self-end text-3xl">{`= ${total}`}</span>;
};
