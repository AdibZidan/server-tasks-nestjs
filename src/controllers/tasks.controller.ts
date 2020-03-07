import { Controller, Get, Param, Put, Body, Delete } from '@nestjs/common';
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

  @Put(':id')
  public updateTask(@Param('id') id: string, @Body() task: Task): string | Task {
    return this.taskService.updateOne(id, task);
  }

  @Delete(':id')
  public deleteTask(@Param('id') id: string): string | Task[] {
    return this.taskService.deleteOne(id);
  }

}
