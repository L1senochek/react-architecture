import type { InputHTMLAttributes } from 'react';

export type InputSize = 'md' | 'sm';

export type InputVariant = 'dark' | 'white';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
  inputSize?: InputSize;
  variant?: InputVariant;
};
