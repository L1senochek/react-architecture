import type { ButtonHTMLAttributes } from 'react';

export type FilterButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
};
