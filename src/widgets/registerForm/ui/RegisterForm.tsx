import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { registerFormSchema } from '../model/schema';
import type { RegisterFormValues } from '../model/types';
import { registerFormFields } from './fields';
import { FormField } from './FormField/FormField';
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
          {registerFormFields.map((field) => (
            <FormField
              key={field.name}
              {...field}
              register={register}
              error={errors[field.name]?.message}
            />
          ))}
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
