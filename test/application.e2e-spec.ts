import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/application.module';

describe('Application Controller (e2e)', () => {

  let application: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    application = moduleFixture.createNestApplication();

    await application.init();
  });

  it('/ (GET)', () => {
    return request(application.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

});
