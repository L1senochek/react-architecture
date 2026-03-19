import { useCallback } from 'react';

import type { TaskFilter } from 'entities/task/model/types';
import { TaskFilters } from 'features/taskFilters';
import { Loader } from 'shared/ui/Loader';
import { useTasks } from 'widgets/taskList/model/useTasks';
import { TaskList } from 'widgets/taskList/ui/TaskList';

import styles from './TaskWidget.module.css';

export function TaskWidget() {
  const { tasks, filter, setFilter, removeTask, isLoading, isError } = useTasks();

  const handleFilterChange = useCallback(
    (newFilter: TaskFilter) => {
      setFilter(newFilter);
    },
    [setFilter],
  );

  return (
    <section className={styles.root}>
      <TaskFilters filter={filter} onFilterChange={handleFilterChange} />
      {isLoading && <Loader label="Загрузка задач..." />}
      {isError && <div>Не удалось загрузить задачи. Попробуйте позже</div>}
      {!isLoading && !isError && <TaskList tasks={tasks} onRemove={removeTask} />}
    </section>
  );
}
