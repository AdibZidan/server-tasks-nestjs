import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Task } from '../../shared/models/task.model';
import { TasksService } from '../services/tasks.service';

@Controller('tasks')
export class TasksController {

  constructor(
    private readonly taskService: TasksService
  ) { }

  @Get()
  public getTasks(): Task[] {
    return this.taskService.findAll();
  }

  @Get(':id')
  public getTask(@Param('id', ParseIntPipe) id: number): Task {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  public updateTask(@Param('id', ParseIntPipe) id: number, @Body() task: Task): Task {
    return this.taskService.updateOne(id, task);
  }

  @Delete(':id')
  public deleteTask(@Param('id', ParseIntPipe) id: number): Task[] {
    return this.taskService.deleteOne(id);
  }

  @Post()
  public publishTask(@Body() task: Task): Task {
    return this.taskService.postOne(task);
  }

}
