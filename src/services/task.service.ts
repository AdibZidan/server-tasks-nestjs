import { Injectable } from '@nestjs/common';
import { tasksMock } from '../mocks/tasks-mock';
import { Task } from '../models/Task';
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

}
