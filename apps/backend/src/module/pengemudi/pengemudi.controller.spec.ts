import { Test, TestingModule } from '@nestjs/testing';
import { PengemudiController } from './pengemudi.controller';

describe('PengemudiController', () => {
  let controller: PengemudiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PengemudiController],
    }).compile();

    controller = module.get<PengemudiController>(PengemudiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
