import type { FormFieldProps } from './types';

import { Input } from 'shared/ui/Input';
import styles from './FormField.module.css';

export function FormField({
  name,
  label,
  type,
  autoComplete,
  placeholder,
  register,
  error,
}: FormFieldProps) {
  return (
    <div className={`${styles.field} ${error ? styles.error : ''}`}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        hasError={Boolean(error)}
        {...register(name)}
      />
      <span className={styles.hint}>{error}</span>
    </div>
  );
}
