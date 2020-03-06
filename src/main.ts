import { NestFactory } from '@nestjs/core';
import { AppModule } from './application.module';

async function bootstrap() {
  const application = await NestFactory.create(AppModule);

  await application.listen(3000);
}

bootstrap();
