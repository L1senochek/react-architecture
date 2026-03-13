import { TaskCard } from 'entities/task/ui/TaskCard';

import { Button } from 'shared/ui/Button';

import styles from './TaskList.module.css';
import type { TaskListProps } from './types';

export function TaskList({ tasks, onRemove }: TaskListProps) {
  if (tasks.length === 0) {
    return <div className={styles.empty}>Нет задач по текущему фильтру.</div>;
  }

  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <div key={task.id} className={styles.row}>
          <TaskCard task={task} />
          <Button variant="danger" onClick={() => onRemove(task.id)}>
            Удалить
          </Button>
        </div>
      ))}
    </div>
  );
}
