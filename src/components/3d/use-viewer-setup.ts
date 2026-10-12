import { Viewer } from '@combeenation/3d-viewer';
import { RefObject, useEffect, useState } from 'react';

export function useViewerSetup(canvasRef: RefObject<HTMLCanvasElement | null>): Viewer | null {
  const [viewer, setViewer] = useState<Viewer | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    let initializedViewer: Viewer | null = null;
    let resizeTimeout = 0;
    let resizeObserver: ResizeObserver | null = null;
    const preventWheelScroll = (event: WheelEvent): void => event.preventDefault();

    // Deferred so StrictMode / HMR effect re-runs never create and destroy an engine on the same canvas back to back.
    const initTimeout = window.setTimeout(() => {
      const newViewer = new Viewer(canvas, { useRightHandedSystem: true });

      initializedViewer = newViewer;
      setViewer(newViewer);

      resizeObserver = new ResizeObserver(() => {
        window.clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(() => newViewer.engine.resize(), 20);
      });
      resizeObserver.observe(canvas);
      canvas.addEventListener('wheel', preventWheelScroll, { passive: false });
    }, 0);

    return (): void => {
      window.clearTimeout(initTimeout);
      window.clearTimeout(resizeTimeout);
      resizeObserver?.disconnect();
      canvas.removeEventListener('wheel', preventWheelScroll);
      if (initializedViewer) {
        setViewer(null);
        initializedViewer.destroy();
      }
    };
  }, [canvasRef]);

  return viewer;
}
