import { memo } from 'react';

import type { TaskFilter } from 'entities/task/model/types';
import { FilterButton } from 'shared/ui/FilterButton';

import styles from './TaskFilters.module.css';

const FILTER_CONFIG: { id: TaskFilter; label: string }[] = [
  { id: 'all', label: 'Все' },
  { id: 'completed', label: 'Завершенные' },
  { id: 'incomplete', label: 'Незавершенные' },
];

export type TaskFiltersProps = {
  filter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
};

function TaskFiltersComponent({ filter, onFilterChange }: TaskFiltersProps) {
  return (
    <div className={styles.filters}>
      {FILTER_CONFIG.map(({ id, label }) => (
        <FilterButton key={id} isActive={filter === id} onClick={() => onFilterChange(id)}>
          {label}
        </FilterButton>
      ))}
    </div>
  );
}

export const TaskFilters = memo(TaskFiltersComponent);
