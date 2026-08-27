import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { ReactNode } from 'react';

const StyledButton = styled(Button)(({ theme }) => ({
  'minWidth': 0,
  'width': 32,
  'height': 32,
  'border': '1px solid #ccc',

  'backgroundColor': theme.palette.background.default,
  'color': theme.palette.text.primary,

  '&:hover': {
    boxShadow: theme.shadows[2],
  },
}));

type CounterButtonProps = {
  ariaLabel: string;
  children: ReactNode;
  onClick: () => void;
};

export function CounterButton({ ariaLabel, children, onClick }: CounterButtonProps) {
  return (
    <StyledButton aria-label={ariaLabel} onClick={onClick} type="button">
      {children}
    </StyledButton>
  );
}
