import { Test, TestingModule } from '@nestjs/testing';
import { TriviasController } from './trivias.controller';

describe('TriviasController', () => {
  let controller: TriviasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TriviasController],
    }).compile();

    controller = module.get<TriviasController>(TriviasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
