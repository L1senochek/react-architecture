import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { registerFormSchema } from '../model/schema';
import type { RegisterFormValues } from '../model/types';
import styles from './RegisterForm.module.css';

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log('Register form submit:', data);
  };

  return (
    <section className={styles.root}>
      <h1 className={styles.title}>Регистрация</h1>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.content}>
          <div className={`${styles.field} ${errors.username ? styles.error : ''}`}>
            <label className={styles.label} htmlFor="username">
              Имя пользователя
            </label>
            <input
              id="username"
              className={styles.input}
              placeholder="Введите имя пользователя"
              autoComplete="username"
              {...register('username')}
            />
            <span className={styles.hint}>{errors.username && errors.username.message}</span>
          </div>

          <div className={`${styles.field} ${errors.email ? styles.error : ''}`}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="you@example.com"
              autoComplete="email"
              {...register('email')}
            />
            <span className={styles.hint}>{errors.email && errors.email.message}</span>
          </div>

          <div className={`${styles.field} ${errors.password ? styles.error : ''}`}>
            <label className={styles.label} htmlFor="password">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              className={styles.input}
              placeholder="Минимум 6 символов"
              autoComplete="new-password"
              {...register('password')}
            />
            <span className={styles.hint}>{errors.password && errors.password.message}</span>
          </div>

          <div className={`${styles.field} ${errors.confirmPassword ? styles.error : ''}`}>
            <label className={styles.label} htmlFor="confirmPassword">
              Подтверждение пароля
            </label>
            <input
              id="confirmPassword"
              type="password"
              className={styles.input}
              placeholder="Повторите пароль"
              autoComplete="new-password"
              {...register('confirmPassword')}
            />
            <span className={styles.hint}>
              {errors.confirmPassword && errors.confirmPassword.message}
            </span>
          </div>
        </div>

        <div className={styles.footer}>
          <button type="submit" className={styles.submit}>
            Зарегистрироваться
          </button>
        </div>
      </form>
    </section>
  );
}
