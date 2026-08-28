import { App } from './components/app';
import { muiTheme } from './theme/mui-theme';
import { ReactRoot_cc } from './typings/cfgr-defs.generated';
import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export function renderReactRoot() {
  ReactRoot_cc.render(element => {
    createRoot(element).render(
      <StrictMode>
        <ThemeProvider theme={muiTheme}>
          <App />
        </ThemeProvider>
      </StrictMode>
    );
  });
}
