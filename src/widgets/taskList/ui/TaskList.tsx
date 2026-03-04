import { memo, useCallback } from 'react';

import { TaskCard } from 'entities/task/ui/TaskCard';

import { Button } from 'shared/ui/Button';

import styles from './TaskList.module.css';
import type { TaskListProps } from './types';

function TaskListComponent({ tasks, onRemove }: TaskListProps) {
  const handleRemove = useCallback(
    (id: string) => {
      onRemove(id);
    },
    [onRemove],
  );
  if (tasks.length === 0) {
    return <div className={styles.empty}>Нет задач по текущему фильтру.</div>;
  }

  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <div key={task.id} className={styles.row}>
          <TaskCard task={task} />
          <Button variant="danger" onClick={() => handleRemove(task.id)}>
            Удалить
          </Button>
        </div>
      ))}
    </div>
  );
}

export const TaskList = memo(TaskListComponent);
