import { Test, TestingModule } from '@nestjs/testing';

import { LandPadService } from '../landpad.service';

describe('LandPadService', () => {
  let service: LandPadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LandPadService],
    }).compile();

    service = module.get<LandPadService>(LandPadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
