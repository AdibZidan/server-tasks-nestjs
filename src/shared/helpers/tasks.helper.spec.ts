import { getMockedTasks } from '../mocks/tasks.mock';
import { Task } from '../models/task.model';
import { deleteTask, findTask, isLegit, toggleIsCompleteProperty } from './tasks.helper';

describe('Task helper', () => {

  let mockedTasks: Task[];

  beforeEach(() => {
    mockedTasks = getMockedTasks();
  });

  it('Should find a specific task', () => {
    const actualFoundTask: Task = findTask(mockedTasks, '1');
    const expectedFoundTask: Task = mockedTasks[0];

    expect(actualFoundTask)
      .toEqual(expectedFoundTask);
  });

  it('Should delete a specific task', () => {
    const expectedMockedTasks: Task[] = [mockedTasks[1], mockedTasks[2]];
    const actualMockedTasks: Task[] = deleteTask(mockedTasks, '1');

    expect(actualMockedTasks)
      .toEqual(expectedMockedTasks);

    expect(actualMockedTasks.length)
      .toEqual(2);
  });

  it('Should toggle isComplete property', () => {
    expect(mockedTasks[2].isComplete)
      .toEqual(false);

    toggleIsCompleteProperty(mockedTasks, 3);

    expect(mockedTasks[2].isComplete)
      .toEqual(true);

    toggleIsCompleteProperty(mockedTasks, 3);

    expect(mockedTasks[2].isComplete)
      .toEqual(false);
  });

  it('Should check if a task has at-least a single property', () => {
    const taskWithNoProperties: any = {};

    expect(isLegit(taskWithNoProperties))
      .toEqual(true);

    const taskWithProperties: Task = mockedTasks[0];

    expect(isLegit(taskWithProperties))
      .toEqual(false);
  });

});
