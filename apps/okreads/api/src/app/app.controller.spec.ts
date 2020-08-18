import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [],
      controllers: [AppController]
    }).compile();
  });

  describe('getData', () => {
    it('should return root resource', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getRoot()).toEqual('It Worked!');
    });
  });
});
