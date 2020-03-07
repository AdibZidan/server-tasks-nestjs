import { Module } from '@nestjs/common';
import { TasksController } from './controllers/tasks.controller';
import { TaskService } from './services/task.service';

@Module({
  controllers: [TasksController],
  providers: [TaskService]
})

export class AppModule { }
