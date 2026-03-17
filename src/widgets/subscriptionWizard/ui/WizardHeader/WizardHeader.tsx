import styles from './WizardHeader.module.css';
import type { WizardHeaderProps } from './types';

export function WizardHeader({ title, step, totalSteps }: WizardHeaderProps) {
  return (
    <header className={styles.wizardHeader}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.steps}>
        <div className={styles.stepDots}>
          <span className={`${styles.stepDot} ${step === 1 ? styles.stepDotActive : ''}`} />
          <span className={`${styles.stepDot} ${step === 2 ? styles.stepDotActive : ''}`} />
        </div>
        <span className={styles.stepLabel}>
          Шаг {step} из {totalSteps}
        </span>
      </div>
    </header>
  );
}
