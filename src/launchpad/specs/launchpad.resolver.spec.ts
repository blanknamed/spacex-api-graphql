import { Test, TestingModule } from '@nestjs/testing';

import { LaunchpadResolver } from '../launchpad.resolver';

describe('LaunchpadResolver', () => {
  let resolver: LaunchpadResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaunchpadResolver],
    }).compile();

    resolver = module.get<LaunchpadResolver>(LaunchpadResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
