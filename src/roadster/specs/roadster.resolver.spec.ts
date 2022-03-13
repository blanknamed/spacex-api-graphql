import { Test, TestingModule } from '@nestjs/testing';

import { RoadsterResolver } from '../roadster.resolver';

describe('RoadsterResolver', () => {
  let resolver: RoadsterResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoadsterResolver],
    }).compile();

    resolver = module.get<RoadsterResolver>(RoadsterResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
