import { renderReactRoot } from './react-root';
import './theme/styles.css';

declare global {
  interface Window {
    CbnCustomCode: object;
  }
}

/**
 * Perform initialisation by registering some events after the configurator is ready (controls created, rendered,
 * product plan has already been loaded etc.)
 */
async function initCfgr(): Promise<void> {
  console.warn('> Custom Code Loaded');

  renderReactRoot();

  // Make some functions accessible in the global window object (e.g. for debugging in the console etc.)
  // Can be extended as needed.
  window.CbnCustomCode = {};
}
initCfgr();
