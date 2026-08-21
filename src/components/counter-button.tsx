import type { ReactNode } from 'react';

type CounterButtonProps = {
  ariaLabel: string;
  children: ReactNode;
  onClick: () => void;
};

export function CounterButton({ ariaLabel, children, onClick }: CounterButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      className="cursor-pointer rounded border border-sky-300 bg-sky-100 px-2 py-1 text-sky-950 hover:bg-sky-200"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
