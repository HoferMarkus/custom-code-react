import { Cnt1, Cnt2, Cnt3 } from '../typings/cfgr-defs.generated';
import { View2D } from './2d/view-2d';
import { CounterControlStack } from './counter/counter-control-stack';
import { Result } from './result';

export function App() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex gap-4">
        <CounterControlStack component={Cnt1} />
        <CounterControlStack component={Cnt2} />
        <CounterControlStack component={Cnt3} />
        <Result />
      </div>

      <View2D />
    </div>
  );
}
