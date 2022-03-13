import { Test, TestingModule } from '@nestjs/testing';

import { LandpadResolver } from '../landpad.resolver';

describe('LandpadResolver', () => {
  let resolver: LandpadResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LandpadResolver],
    }).compile();

    resolver = module.get<LandpadResolver>(LandpadResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
