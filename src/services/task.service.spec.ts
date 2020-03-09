import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { tasksMock } from '../mocks/tasks-mock';
import { Task } from '../models/Task';

describe('Task Service', () => {

  let taskService: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService],
    }).compile();

    taskService = module.get<TaskService>(TaskService);
  });

  it('Should be defined', () => {
    expect(taskService)
      .toBeDefined();
  });

  it('Should return all mocked tasks', () => {
    expect(taskService.findAll())
      .toEqual(tasksMock);
  });

  it('Should return a specific task', () => {
    expect(taskService.findOne('3'))
      .toEqual(tasksMock[2]);

    expect(taskService.findOne('0'))
      .toEqual('No task with the id of 0 found!');
  });

  it('Should return an updated task', () => {
    const updatedTask: Task = {
      id: 2,
      title: 'Wake up at 6 A.M tomorrow',
      description: 'Prepare coffee and continue working on your project',
      percentage: 0,
      isComplete: false
    };

    expect(taskService.updateOne('1', updatedTask))
      .toEqual(updatedTask);

    expect(taskService.updateOne('0', updatedTask))
      .toEqual('No task with the id of 0 found!');
  });

  it('Should delete a specific task', () => {
    expect(taskService.deleteOne('3').length)
      .toEqual(2);
  });

  it('Should publish a specific task', () => {
    const taskToPublish: Task = {
      id: 0,
      title: 'Wake up at 6 A.M tomorrow',
      description: 'Prepare coffee and continue working on your project',
      percentage: 0,
      isComplete: false
    };

    expect(taskService.postOne(taskToPublish))
      .toEqual(taskToPublish);

    expect(taskService.postOne(taskToPublish).id)
      .toEqual(4);
  });

});
