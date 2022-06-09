import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  /*it('/claim-free-share (POST)', () => {
    return request(app.getHttpServer())
      .post('/claim-free-share')
      .send({
        toAccount: "test1"
      })
      .expect(201)
      .expect('Hello World!');
  });*/
});
