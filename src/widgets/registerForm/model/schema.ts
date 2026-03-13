import { z } from 'zod';

export const registerFormSchema = z
  .object({
    username: z.string().min(1, 'Имя пользователя обязательно'),
    email: z.string().min(1, 'Email обязателен').email('Email должен содержать символ @'),
    password: z
      .string()
      .min(1, 'Пароль обязателен')
      .min(6, 'Пароль должен содержать минимум 6 символов'),
    confirmPassword: z.string().min(1, 'Подтверждение пароля обязательно'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли должны совпадать',
    path: ['confirmPassword'],
  });
