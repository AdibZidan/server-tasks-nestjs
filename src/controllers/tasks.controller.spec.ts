import { Test, TestingModule } from '@nestjs/testing';
import { tasksMock } from '../mocks/tasks-mock';
import { Task } from '../models/Task';
import { TaskService } from '../services/task.service';
import { TasksController } from './tasks.controller';

describe('Tasks Controller', () => {

  let tasksController: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TaskService]
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

  it('Should update a specific task', () => {
    const updatedTask: Task = {
      id: 1,
      title: 'Test title 1 - Updated',
      description: 'Test description 1 - Updated',
      percentage: 100,
      isComplete: true
    };

    expect(tasksMock[0])
      .not.toEqual(updatedTask);

    expect(tasksController.updateTask('1', updatedTask))
      .toEqual(updatedTask);
  });

  it('Should delete a specific task', () => {
    const expectedMockedTasks: Task[] = [tasksMock[1], tasksMock[2]];

    expect(tasksController.deleteTask('1'))
      .toEqual(expectedMockedTasks);
  });

});
