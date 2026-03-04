import { memo } from 'react';

import type { TaskCardProps } from './types';

import styles from './TaskCard.module.css';

function TaskCardComponent({ task }: TaskCardProps) {
  const dotClassName = [
    styles.dot,
    task.completed ? styles.dotCompleted : styles.dotIncomplete,
  ].join(' ');

  return (
    <div className={styles.card}>
      <div className={styles.title}>{task.title}</div>
      <div className={styles.status}>
        <span className={dotClassName} aria-hidden="true" />
        <span>{task.completed ? 'Завершено' : 'В процессе'}</span>
      </div>
    </div>
  );
}

export const TaskCard = memo(TaskCardComponent);
