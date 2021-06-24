import { Test, TestingModule } from '@nestjs/testing';
import { PengemudiService } from './pengemudi.service';

describe('PengemudiService', () => {
  let service: PengemudiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PengemudiService],
    }).compile();

    service = module.get<PengemudiService>(PengemudiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
