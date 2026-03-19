import styles from './StepSuccess.module.css';

export function StepSuccess() {
  return (
    <div className={styles.stepSuccess}>
      <p className={styles.text}>
        Подписка успешно оформлена. Проверьте почту и подтвердите подписку.
      </p>
    </div>
  );
}
