import { Input } from 'shared/ui/Input';

import type { StepEmailProps } from './types';
import styles from './StepEmail.module.css';

export function StepEmail({ formId, state, formProps }: StepEmailProps) {
  return (
    <form id={formId} className={styles.form} noValidate {...formProps}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="wizard-email">
          Email
        </label>
        <Input
          id="wizard-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          inputSize="sm"
          hasError={state.status === 'error'}
        />
        {state.status === 'error' && state.error && (
          <span className={styles.hint}>{state.error}</span>
        )}
      </div>
    </form>
  );
}
