import { RegisterForm } from 'widgets/registerForm';

import styles from './RegisterPage.module.css';

export function RegisterPage() {
  return (
    <div className={styles.page}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
