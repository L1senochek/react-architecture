import type { FormHTMLAttributes } from 'react';

import type { WizardState } from '../../model/types';

export interface StepEmailProps {
  formId: string;
  state: WizardState;
  formProps: FormHTMLAttributes<HTMLFormElement>;
}
