import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { deleteTask, findTask, isNotLegit } from '../../shared/helpers/tasks.helper';
import { getMockedTasks } from '../../shared/mocks/tasks.mock';
import { Task } from '../../shared/models/task.model';

@Injectable()
export class TasksService {

  public readonly tasks: Task[] = getMockedTasks();

  public findAll(): Task[] {
    return this.tasks;
  }

  public findOne(id: string): Task {
    const task: Task = findTask(this.tasks, id);

    if (!task) {
      throw new HttpException(
        `No task with the id of ${id} found!`,
        HttpStatus.NOT_FOUND
      );
    }

    return task;
  }

  public updateOne(id: string, task: Task): Task {
    const taskToFind: Task = findTask(this.tasks, id);

    if (!taskToFind) {
      throw new HttpException(
        `No task with the id of ${id} found!`,
        HttpStatus.NOT_FOUND
      );
    }

    const updatedTask: Task = Object.assign(taskToFind, task);

    return updatedTask;
  }

  public deleteOne(id: string): Task[] {
    const ids: number[] = this.tasks.map((task: Task): number => task.id);

    if (!ids.includes(parseInt(id))) {
      throw new HttpException(
        `No task with the id of ${id} found!`,
        HttpStatus.NOT_FOUND
      );
    }

    return deleteTask(this.tasks, id);
  }

  public postOne(task: Task): Task {
    if (isNotLegit(task)) {
      throw new HttpException(
        'Your task is missing some properties!',
        HttpStatus.NOT_ACCEPTABLE
      );
    }

    task.id = this.tasks.length + 1;

    this.tasks.push(task);

    return task;
  }

}
