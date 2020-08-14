import { Test, TestingModule } from '@nestjs/testing';
import { Task } from '../../shared/models/task.model';
import { TasksService } from './tasks.service';

describe('Task Service', () => {

  let testingModule: TestingModule;
  let taskService: TasksService;
  let mockedTasks: Task[];

  beforeEach(async () => {
    testingModule = await Test.createTestingModule({
      providers: [TasksService]
    }).compile();
  });

  beforeEach(() => {
    taskService = testingModule.get<TasksService>(TasksService);
    mockedTasks = taskService.tasks;
  });

  it('Should be defined', () => {
    expect(taskService)
      .toBeDefined();
  });

  it('Should return all mocked tasks', () => {
    expect(taskService.findAll())
      .toEqual(mockedTasks);
  });

  it('Should return a specific task', () => {
    expect(taskService.findOne('3'))
      .toEqual(mockedTasks[2]);
  });

  it('Should return an exception if given an incorrect ID when searching for a specific task', () => {
    expect((): Task =>
      taskService.findOne('10')
    ).toThrow('No task with the id of 10 found!');
  });

  it('Should return an updated task', () => {
    const updatedTask: Task = {
      id: 1,
      title: 'Wake up at 6 A.M tomorrow',
      description: 'Prepare coffee and continue working on your project',
      percentage: 0,
      isComplete: false
    };

    expect(taskService.updateOne('1', updatedTask))
      .toEqual(updatedTask);
  });

  it('Should return an exception if given an incorrect ID when updating a specific task', () => {
    const task: Task = mockedTasks[1];

    expect((): Task =>
      taskService.updateOne('100', task)
    ).toThrow('No task with the id of 100 found!');
  });

  it('Should delete a specific task', () => {
    expect(taskService.deleteOne('3').length)
      .toEqual(2);
  });

  it('Should return an exception if given an incorrect ID when deleting a specific task', () => {
    expect((): Task[] =>
      taskService.deleteOne('50')
    ).toThrow('No task with the id of 50 found!');
  });

  it('Should publish a specific task', () => {
    expect(mockedTasks.length)
      .toEqual(3);

    const taskToPublish: Task = {
      title: 'Wake up at 6 A.M tomorrow',
      description: 'Prepare coffee and continue working on your project',
      percentage: 0,
      isComplete: false
    };

    const actualPublishedTask: Task = taskService.postOne(taskToPublish);

    expect(actualPublishedTask)
      .toEqual(taskToPublish);

    expect(mockedTasks.length)
      .toEqual(4);
  });

  it('Should return an exception if given an incomplete task when publishing a specific task', () => {
    expect((): Task =>
      taskService.postOne(null)
    ).toThrow('Your task is missing some properties!');
  });

});
