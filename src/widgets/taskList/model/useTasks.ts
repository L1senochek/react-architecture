import { useCallback, useMemo, useState } from 'react';

import type { Task } from 'entities/task/model/types';
import type { Filter } from './types';

export function useTasks(initial: Task[]): {
  tasks: Task[];
  filter: Filter;
  setFilter: (f: Filter) => void;
  removeTask: (id: string) => void;
} {
  const [items, setItems] = useState<Task[]>(initial);
  const [filter, setFilter] = useState<Filter>('all');

  const tasks = useMemo(() => {
    if (filter === 'completed') {
      return items.filter((task) => task.completed);
    }

    if (filter === 'incomplete') {
      return items.filter((task) => !task.completed);
    }

    return items;
  }, [filter, items]);

  const removeTask = useCallback(
    (id: string) => {
      setItems((prev) => prev.filter((t) => t.id !== id));
    },
    [],
  );

  return { tasks, filter, setFilter, removeTask };
}
