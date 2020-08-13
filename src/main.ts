import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './application.module';

async function bootstrap(): Promise<void> {
  const application = await NestFactory.create(ApplicationModule);
  application.setGlobalPrefix('api/version1');

  await application.listen(3000);
}

bootstrap();
