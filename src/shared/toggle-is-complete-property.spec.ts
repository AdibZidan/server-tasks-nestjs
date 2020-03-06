import { Task } from '../models/Task';
import { tasksMock } from '../mocks/tasks-mock';
import { toggleIsCompleteProperty } from './toggle-is-complete-property';

describe('Toggle isComplete property method', () => {

  let mockedTasks: Task[];

  beforeEach(() => {
    mockedTasks = tasksMock;
  });

  it('Should toggle a task', () => {
    expect(mockedTasks[2].isComplete)
      .toEqual(false);

    toggleIsCompleteProperty(mockedTasks, 3);

    expect(mockedTasks[2].isComplete)
      .toEqual(true);

    toggleIsCompleteProperty(mockedTasks, 3);

    expect(mockedTasks[2].isComplete)
      .toEqual(false);
  });

});
