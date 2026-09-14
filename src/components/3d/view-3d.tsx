import { useDrawCubeStacks } from './use-draw-cube-stacks';
import { Viewer } from '@combeenation/3d-viewer';
import { useEffect, useRef, useState } from 'react';
import { JSX } from 'react/jsx-runtime';

export function View3D(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [viewer, setViewer] = useState<Viewer | null>(null);

  useDrawCubeStacks(viewer);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const initializedViewer = new Viewer(canvas, { useRightHandedSystem: true });

    setViewer(initializedViewer);

    let resizeTimeout = 0;
    const resizeObserver = new ResizeObserver(() => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => initializedViewer.engine.resize(), 20);
    });
    const preventWheelScroll = (event: WheelEvent) => event.preventDefault();

    resizeObserver.observe(canvas);
    canvas.addEventListener('wheel', preventWheelScroll, { passive: false });

    return () => {
      window.clearTimeout(resizeTimeout);
      resizeObserver.disconnect();
      canvas.removeEventListener('wheel', preventWheelScroll);
      setViewer(null);
      initializedViewer.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" aria-label="3D cube viewer" />;
}
