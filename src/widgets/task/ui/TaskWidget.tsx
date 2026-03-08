import { useCallback } from 'react';

import type { Task, TaskFilter } from 'entities/task/model/types';
import { TaskFilters } from 'features/task-filters';
import { useTasks } from 'widgets/taskList/model/useTasks';
import { TaskList } from 'widgets/taskList/ui/TaskList';

import styles from './TaskWidget.module.css';

const initialTasks: Task[] = [
  { id: '1', title: 'Проект запускается без ошибок', completed: true },
  { id: '2', title: 'Стили через .module.css', completed: true },
  { id: '3', title: 'Типизация и структура', completed: false },
  { id: '4', title: 'Структура соответствует FSD', completed: false },
];

export function TaskWidget() {
  const { tasks, filter, setFilter, removeTask } = useTasks(initialTasks);

  const handleFilterChange = useCallback(
    (newFilter: TaskFilter) => {
      setFilter(newFilter);
    },
    [setFilter],
  );

  return (
    <section className={styles.root}>
      <TaskFilters filter={filter} onFilterChange={handleFilterChange} />
      <TaskList tasks={tasks} onRemove={removeTask} />
    </section>
  );
}
