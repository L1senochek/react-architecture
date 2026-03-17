import { RegisterForm } from 'widgets/registerForm';
import { SubscriptionWizard } from 'widgets/subscriptionWizard';

import styles from './RegisterPage.module.css';

export function RegisterPage() {
  return (
    <div className={styles.page}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <RegisterForm />
          <SubscriptionWizard />
        </div>
      </div>
    </div>
  );
}
