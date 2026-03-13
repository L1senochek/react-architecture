import { memo } from 'react';

import styles from './Button.module.css';
import type { ButtonProps } from './types';

function ButtonComponent({ variant = 'default', size = 'md', className, ...props }: ButtonProps) {
  const classes = [
    styles.button,
    variant === 'danger' ? styles.danger : '',
    size === 'sm' ? styles.sm : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return <button type="button" className={classes} {...props} />;
}

export const Button = memo(ButtonComponent);
