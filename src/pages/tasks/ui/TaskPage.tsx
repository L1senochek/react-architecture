import { TaskWidget } from 'widgets/task';
import styles from './TaskPage.module.css';

export function TaskPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Мои задачи</h1>
        <TaskWidget />
      </div>
    </div>
  );
}
