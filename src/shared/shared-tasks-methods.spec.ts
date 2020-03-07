import { tasksMock } from '../mocks/tasks-mock';
import { Task } from '../models/Task';
import { findTask } from './find-task';
import { toggleIsCompleteProperty } from './toggle-is-complete-property';

describe('Task shared methods', () => {

  let mockedTasks: Task[];

  beforeEach(() => {
    mockedTasks = tasksMock;
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

  it('Should find a specific task', () => {
    const actualFoundTask: Task = findTask(mockedTasks, '1');
    const expectedFoundTask: Task = mockedTasks[0];

    expect(actualFoundTask)
      .toEqual(expectedFoundTask);
  });

});
