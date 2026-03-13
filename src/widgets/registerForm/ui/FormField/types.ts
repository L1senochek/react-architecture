import type { UseFormRegister } from 'react-hook-form';

import type { RegisterFormFieldConfig } from '../types';
import type { RegisterFormValues } from '../../model/types';

export interface FormFieldProps extends RegisterFormFieldConfig {
  register: UseFormRegister<RegisterFormValues>;
  error?: string;
}
