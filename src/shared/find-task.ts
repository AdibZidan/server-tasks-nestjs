import { Task } from '../models/Task';

export const findTask = (tasks: Task[], id: string): Task => {
  const task: Task = tasks.find((task: Task) => parseInt(id) === task.id);

  return task;
};
