import { Cnt1, Cnt2, Cnt3 } from '../typings/cfgr-defs.generated';
import { CounterControlStack } from './counter-control-stack';
import { Result } from './result';

export function App() {
  return (
    <div className="flex gap-4 p-6">
      <CounterControlStack component={Cnt1} />
      <CounterControlStack component={Cnt2} />
      <CounterControlStack component={Cnt3} />
      <Result />
    </div>
  );
}
