import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { tasksMock } from '../mocks/tasks-mock';

describe('Tasks Controller', () => {

  let tasksController: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController]
    }).compile();

    tasksController = module.get<TasksController>(TasksController);
  });

  it('Should be defined', () => {
    expect(tasksController)
      .toBeDefined();
  });

  it('Should get a specific task', () => {
    expect(tasksController.getTask('1'))
      .toEqual(tasksMock[0]);
  });

  it('Should return a message if given a wrong id', () => {
    expect(tasksController.getTask('4'))
      .toEqual('No task with the id of 4 found!');
  });

});
