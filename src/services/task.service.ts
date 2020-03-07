import { Injectable } from '@nestjs/common';
import { tasksMock } from '../mocks/tasks-mock';
import { Task } from '../models/Task';
import { deleteTask } from '../shared/delete-task';
import { findTask } from '../shared/find-task';

@Injectable()
export class TaskService {

  private readonly tasks: Task[] = tasksMock;

  public findAll(): Task[] {
    return this.tasks;
  }

  public findOne(id: string): string | Task {
    const task: Task = findTask(this.tasks, id);

    if (!task) {
      return `No task with the id of ${id} found!`;
    } else {
      return task;
    }
  }

  public updateOne(id: string, task: Task): string | Task {
    const taskToFind: Task = findTask(this.tasks, id);
    const taskToUpdate: Task = Object.assign(taskToFind, task);

    if (!task) {
      return `No task with the id of ${id} found!`;
    } else {
      return taskToUpdate;
    }
  }

  public deleteOne(id: string): string | Task[] {
    const taskToDelete: Task[] = deleteTask(this.tasks, id);

    if (!taskToDelete) {
      return `No task with the id of ${id} found!`;
    } else {
      return taskToDelete;
    }
  }

}
