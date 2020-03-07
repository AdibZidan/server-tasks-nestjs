import { Task } from '../models/Task';

export const deleteTask = (tasks: Task[], id: string): Task[] => {
  return tasks.filter((taskToDelete: Task) => taskToDelete.id !== parseInt(id));
};
