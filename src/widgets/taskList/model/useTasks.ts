import { useCallback, useMemo, useState } from 'react';

import type { Task } from 'entities/task/model/types';
import { useGetTasksQuery } from 'entities/task/api/tasksApi';
import type { Filter } from './types';

export function useTasks(): {
  tasks: Task[];
  filter: Filter;
  setFilter: (f: Filter) => void;
  removeTask: (id: string) => void;
  isLoading: boolean;
  isError: boolean;
} {
  const {
    data: remoteTasks = [],
    isLoading,
    isError,
  } = useGetTasksQuery();

  const [deletedIds, setDeletedIds] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<Filter>('all');

  const items = useMemo(
    () => remoteTasks.filter((task) => !deletedIds.has(String(task.id))),
    [remoteTasks, deletedIds],
  );

  const tasks = useMemo(() => {
    if (filter === 'completed') {
      return items.filter((task) => task.completed);
    }

    if (filter === 'incomplete') {
      return items.filter((task) => !task.completed);
    }

    return items;
  }, [filter, items]);

  const removeTask = useCallback((id: string) => {
    setDeletedIds((prev) => new Set(prev).add(id));
  }, []);

  return { tasks, filter, setFilter, removeTask, isLoading, isError };
}
