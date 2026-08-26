import { App } from './components/app';
import { ReactRoot_cc } from './typings/cfgr-defs.generated';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export function renderReactRoot() {
  ReactRoot_cc.render(element => {
    createRoot(element).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });
}
