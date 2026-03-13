import type { FormFieldProps } from './types';

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
      <input
        id={name}
        type={type}
        className={styles.input}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name)}
      />
      <span className={styles.hint}>{error}</span>
    </div>
  );
}
