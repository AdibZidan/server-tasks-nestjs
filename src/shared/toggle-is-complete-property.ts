import { Task } from 'src/models/Task';

export const toggleIsCompleteProperty = (tasks: Task[], id: number): void => {
  tasks.forEach((task: Task) => {
    if (task.id === id) {
      task.isComplete = !task.isComplete;
    }
  });
};
