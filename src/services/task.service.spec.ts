import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';

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

});
