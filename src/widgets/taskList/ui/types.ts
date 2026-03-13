import type { Task } from 'entities/task/model/types';

export type TaskListProps = {
  tasks: Task[];
  onRemove: (id: string) => void;
};
