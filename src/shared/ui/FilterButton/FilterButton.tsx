import { memo } from 'react';

import styles from './FilterButton.module.css';
import type { FilterButtonProps } from './types';

function FilterButtonComponent({ isActive, className, ...props }: FilterButtonProps) {
  const classes = [styles.button, isActive ? styles.active : '', className ?? '']
    .filter(Boolean)
    .join(' ');

  return <button type="button" className={classes} {...props} />;
}

export const FilterButton = memo(FilterButtonComponent);
