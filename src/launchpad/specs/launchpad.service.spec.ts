import { Test, TestingModule } from '@nestjs/testing';

import { LaunchPadService } from '../launchpad.service';

describe('LaunchpadService', () => {
  let service: LaunchPadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaunchPadService],
    }).compile();

    service = module.get<LaunchPadService>(LaunchPadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
