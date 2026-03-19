import type { InputHTMLAttributes } from 'react';

export type InputSize = 'md' | 'sm';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
  inputSize?: InputSize;
};
