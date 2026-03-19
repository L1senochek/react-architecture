import styles from './Button.module.css';
import type { ButtonProps } from './types';

export function Button({ variant = 'default', size = 'md', className, ...props }: ButtonProps) {
  const classes = [
    styles.button,
    variant === 'danger' ? styles.danger : '',
    size === 'sm' ? styles.sm : styles.md,
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return <button type="button" className={classes} {...props} />;
}
