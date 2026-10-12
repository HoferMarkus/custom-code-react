export const CUBE_WIDTH = 2;
export const CUBE_HEIGHT = CUBE_WIDTH / 6;
const _CUBE_GAP = CUBE_HEIGHT / 6;
const _STACK_SPACING = 3;

export function getCubeCenter(stackIndex: number, cubeIndex: number): { x: number; y: number } {
  return {
    x: (stackIndex - 1) * _STACK_SPACING,
    y: cubeIndex * (CUBE_HEIGHT + _CUBE_GAP) + CUBE_HEIGHT / 2,
  };
}
