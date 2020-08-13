import { Test, TestingModule } from '@nestjs/testing';
import { getMockedTasks } from '../../shared/mocks/tasks.mock';
import { Task } from '../../shared/models/task.model';
import { TaskService } from '../services/task.service';
import { TasksController } from './tasks.controller';

describe('Tasks Controller', () => {

  let testingModule: TestingModule;
  let tasksController: TasksController;
  let mockedTasks: Task[];

  beforeEach(async () => {
    testingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TaskService]
    }).compile();
  });

  beforeEach(() => {
    tasksController = testingModule.get<TasksController>(TasksController);
    mockedTasks = getMockedTasks();
  });

  it('Should be defined', () => {
    expect(tasksController)
      .toBeDefined();
  });

  it('Should get all tasks', () => {
    expect(tasksController.getTasks())
      .toEqual(mockedTasks);
  });

  it('Should get a specific task', () => {
    expect(tasksController.getTask('1'))
      .toEqual(mockedTasks[0]);
  });

  it('Should update a specific task', () => {
    const updatedTask: Task = {
      id: 1,
      title: 'Test title 1 - Updated',
      description: 'Test description 1 - Updated',
      percentage: 100,
      isComplete: true
    };

    expect(mockedTasks[0])
      .not.toEqual(updatedTask);

    expect(tasksController.updateTask('1', updatedTask))
      .toEqual(updatedTask);
  });

  it('Should delete a specific task', () => {
    const tasksWithIdsTwoAndThree: Task[] = [mockedTasks[1], mockedTasks[2]];

    expect(tasksController.deleteTask('1'))
      .toEqual(tasksWithIdsTwoAndThree);
  });

  it('Should publish a specific task', () => {
    const taskToPublish: Task = tasksController.publishTask({
      title: 'Test title 4',
      description: 'Test description 4',
      percentage: 100,
      isComplete: true
    });

    expect(tasksController.publishTask(taskToPublish))
      .toEqual(taskToPublish);

    expect(taskToPublish.id)
      .toEqual(4);
  });

});
