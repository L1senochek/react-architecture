import type { InputProps } from './types';
import styles from './Input.module.css';

export function Input({ className, hasError, inputSize, ...props }: InputProps) {
  const classes = [
    styles.input,
    inputSize === 'sm' ? styles.sm : '',
    hasError ? styles.error : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return <input className={classes} {...props} />;
}
