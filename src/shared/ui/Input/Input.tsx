import { forwardRef } from 'react';

import type { InputProps } from './types';
import styles from './Input.module.css';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, inputSize, variant = 'dark', ...props }, ref) => {
    const classes = [
      styles.input,
      variant === 'white' ? styles.white : '',
      inputSize === 'sm' ? styles.sm : '',
      hasError ? styles.error : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return <input ref={ref} className={classes} {...props} />;
  },
);
