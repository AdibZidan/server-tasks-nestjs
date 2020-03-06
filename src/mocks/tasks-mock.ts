import { Task } from 'src/models/Task';

export const tasksMock: Task[] = [
  {
    id: 1,
    title: 'Test title 1',
    description: 'Test description 1',
    percentage: 0,
    isComplete: false
  },
  {
    id: 2,
    title: 'Test title 2',
    description: 'Test description 2',
    percentage: 50,
    isComplete: false
  },
  {
    id: 3,
    title: 'Test title 3',
    description: 'Test description 3',
    percentage: 100,
    isComplete: false
  }
];
