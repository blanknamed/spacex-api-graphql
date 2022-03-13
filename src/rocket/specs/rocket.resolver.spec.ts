import { Test, TestingModule } from '@nestjs/testing';

import { RocketResolver } from '../rocket.resolver';

describe('RocketResolver', () => {
  let resolver: RocketResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RocketResolver],
    }).compile();

    resolver = module.get<RocketResolver>(RocketResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
