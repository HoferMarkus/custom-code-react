import { CounterControl } from './components/counter-control';
import { Cnt1, Cnt2, Cnt3, ReactRoot_cc } from './typings/cfgr-defs.generated';
import { createRoot } from 'react-dom/client';

export function renderReactRoot() {
  ReactRoot_cc.render(element => {
    createRoot(element).render(
      <div className="flex gap-2 p-6">
        <CounterControl component={Cnt1} />
        <CounterControl component={Cnt2} />
        <CounterControl component={Cnt3} />
      </div>
    );
  });
}
