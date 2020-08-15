import { Task } from '../models/task.model';

export const findTask = (tasks: Task[], id: number): Task => {
  const task: Task = tasks.find((task: Task) => id === task.id);

  return task;
};

export const deleteTask = (tasks: Task[], id: number): Task[] => {
  return tasks.filter((taskToDelete: Task) => taskToDelete.id !== id);
};

export const toggleIsCompleteProperty = (tasks: Task[], id: number): void => {
  tasks.forEach((task: Task) => {
    if (task.id === id) {
      task.isComplete = !task.isComplete;
    }
  });
};

export const isNotLegit = (task: Task): boolean => {
  return !(task) || isEmpty(task);
};

const isEmpty = (task: Task): boolean => {
  for (const properties in task) {
    if (task.hasOwnProperty(properties)) {
      return false;
    }
  }

  return JSON.stringify(task) === JSON.stringify({});
};
