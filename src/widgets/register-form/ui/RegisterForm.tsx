import { useForm } from 'react-hook-form';

import styles from './RegisterForm.module.css';
import type { RegisterFormValues } from '../model/types';

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
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
          <div className={styles.field}>
            <label className={styles.label} htmlFor="username">
              Имя пользователя
            </label>
            <input
              id="username"
              className={styles.input}
              placeholder="Введите имя пользователя"
              autoComplete="username"
              {...register('username', {
                required: 'Имя пользователя обязательно',
              })}
            />
            <span className={styles.error}>{errors.username && errors.username.message}</span>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="you@example.com"
              autoComplete="email"
              {...register('email', {
                required: 'Email обязателен',
                validate: (value) => value.includes('@') || 'Email должен содержать символ @',
              })}
            />
            <span className={styles.error}>{errors.email && errors.email.message}</span>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              className={styles.input}
              placeholder="Минимум 6 символов"
              autoComplete="new-password"
              {...register('password', {
                required: 'Пароль обязателен',
                minLength: {
                  value: 6,
                  message: 'Пароль должен содержать минимум 6 символов',
                },
              })}
            />
            <span className={styles.error}>{errors.password && errors.password.message}</span>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="confirmPassword">
              Подтверждение пароля
            </label>
            <input
              id="confirmPassword"
              type="password"
              className={styles.input}
              placeholder="Повторите пароль"
              autoComplete="new-password"
              {...register('confirmPassword', {
                required: 'Подтверждение пароля обязательно',
                validate: (value, formValues) =>
                  value === formValues.password || 'Пароли должны совпадать',
              })}
            />
            <span className={styles.error}>
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
