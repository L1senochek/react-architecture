import type { RegisterFormFieldConfig } from './types';

export const registerFormFields: RegisterFormFieldConfig[] = [
  {
    name: 'username',
    label: 'Имя пользователя',
    type: 'text',
    autoComplete: 'username',
    placeholder: 'Введите имя пользователя',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'you@example.com',
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password',
    autoComplete: 'new-password',
    placeholder: 'Минимум 6 символов',
  },
  {
    name: 'confirmPassword',
    label: 'Подтверждение пароля',
    type: 'password',
    autoComplete: 'new-password',
    placeholder: 'Повторите пароль',
  },
];
