import { Controller, Get, Param } from '@nestjs/common';
import { Task } from '../models/Task';
import { TaskService } from '../services/task.service';

@Controller('tasks')
export class TasksController {

  constructor(private readonly taskService: TaskService) { }

  @Get()
  public getTasks(): Task[] {
    return this.taskService.findAll();
  }

  @Get(':id')
  public getTask(@Param('id') id: string): string | Task {
    return this.taskService.findOne(id);
  }

}
