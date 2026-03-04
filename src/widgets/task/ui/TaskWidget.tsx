import type { Task } from 'entities/task/model/types';

import { FilterButton } from 'shared/ui/FilterButton';
import { useTasks, type Filter } from 'widgets/taskList/model/useTasks';
import { TaskList } from 'widgets/taskList/ui/TaskList';

import styles from './TaskWidget.module.css';

const initialTasks: Task[] = [
  { id: '1', title: 'Проект запускается без ошибок', completed: true },
  { id: '2', title: 'Стили через .module.css', completed: true },
  { id: '3', title: 'Типизация и структура', completed: false },
  { id: '4', title: 'Структура соответствует FSD', completed: false },
];

const filters: Array<{ id: Filter; label: string }> = [
  { id: 'all', label: 'Все' },
  { id: 'completed', label: 'Завершенные' },
  { id: 'incomplete', label: 'Незавершенные' },
];

export function TaskWidget() {
  const { tasks, filter, setFilter, removeTask } = useTasks(initialTasks);

  return (
    <section className={styles.root}>
      <div className={styles.filters}>
        {filters.map((f) => (
          <FilterButton key={f.id} isActive={filter === f.id} onClick={() => setFilter(f.id)}>
            {f.label}
          </FilterButton>
        ))}
      </div>

      <TaskList tasks={tasks} onRemove={removeTask} />
    </section>
  );
}
