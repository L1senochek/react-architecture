import type { InputProps } from './types';
import styles from './Input.module.css';

export function Input({ className, hasError, ...props }: InputProps) {
  const classes = [styles.input, hasError ? styles.error : '', className ?? '']
    .filter(Boolean)
    .join(' ');

  return <input className={classes} {...props} />;
}
