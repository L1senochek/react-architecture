import { memo, useCallback } from 'react';

import type { Task } from 'entities/task/model/types';
import type { Filter } from 'widgets/taskList/model/types';
import type { FilterConfig } from './types';

import { FilterButton } from 'shared/ui/FilterButton';
import { useTasks } from 'widgets/taskList/model/useTasks';
import { TaskList } from 'widgets/taskList/ui/TaskList';

import styles from './TaskWidget.module.css';

const initialTasks: Task[] = [
  { id: '1', title: 'Проект запускается без ошибок', completed: true },
  { id: '2', title: 'Стили через .module.css', completed: true },
  { id: '3', title: 'Типизация и структура', completed: false },
  { id: '4', title: 'Структура соответствует FSD', completed: false },
];

const filters: FilterConfig[] = [
  { id: 'all', label: 'Все' },
  { id: 'completed', label: 'Завершенные' },
  { id: 'incomplete', label: 'Незавершенные' },
];

function TaskWidgetComponent() {
  const { tasks, filter, setFilter, removeTask } = useTasks(initialTasks);

  const handleFilterClick = useCallback(
    (id: Filter) => {
      setFilter(id);
    },
    [setFilter],
  );

  return (
    <section className={styles.root}>
      <div className={styles.filters}>
        {filters.map((f) => (
          <FilterButton
            key={f.id}
            isActive={filter === f.id}
            onClick={() => handleFilterClick(f.id)}
          >
            {f.label}
          </FilterButton>
        ))}
      </div>

      <TaskList tasks={tasks} onRemove={removeTask} />
    </section>
  );
}

export const TaskWidget = memo(TaskWidgetComponent);
