import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'default' | 'danger';
export type ButtonSize = 'md' | 'sm';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};
