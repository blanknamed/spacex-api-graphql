import { Test, TestingModule } from '@nestjs/testing';

import { LandPadResolver } from '../landpad.resolver';

describe('LandPadResolver', () => {
  let resolver: LandPadResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LandPadResolver],
    }).compile();

    resolver = module.get<LandPadResolver>(LandPadResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
