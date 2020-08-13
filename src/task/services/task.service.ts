import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { deleteTask, findTask } from '../../shared/helpers/task.helper';
import { getMockedTasks } from '../../shared/mocks/tasks.mock';
import { Task } from '../../shared/models/task.model';

@Injectable()
export class TaskService {

  private readonly tasks: Task[] = getMockedTasks();

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
    } else {
      return task;
    }
  }

  public updateOne(id: string, task: Task): Task {
    const taskToFind: Task = findTask(this.tasks, id);

    if (!taskToFind) {
      throw new HttpException(
        `No task with the id of ${id} found!`,
        HttpStatus.NOT_FOUND
      );
    } else {
      const taskToUpdate: Task = Object.assign(taskToFind, task);

      return taskToUpdate;
    }
  }

  public deleteOne(id: string): Task[] {
    const ids: number[] = this.tasks.map((task: Task) => task.id);

    if (!ids.includes(parseInt(id))) {
      throw new HttpException(
        `No task with the id of ${id} found!`,
        HttpStatus.NOT_FOUND
      );
    } else {
      return deleteTask(this.tasks, id);
    }
  }

  public postOne(task: Task): Task {
    task.id = this.tasks.length++;

    return task;
  }

}
