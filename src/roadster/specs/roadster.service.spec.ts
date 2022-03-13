import { Test, TestingModule } from '@nestjs/testing';

import { RoadsterService } from '../roadster.service';

describe('RoadsterService', () => {
  let service: RoadsterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoadsterService],
    }).compile();

    service = module.get<RoadsterService>(RoadsterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
