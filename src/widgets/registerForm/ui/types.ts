import type { RegisterFormValues } from '../model/types';

export type RegisterFormFieldName = keyof RegisterFormValues;

export interface RegisterFormFieldConfig {
  name: RegisterFormFieldName;
  label: string;
  type: 'text' | 'email' | 'password';
  autoComplete?: string;
  placeholder?: string;
}
