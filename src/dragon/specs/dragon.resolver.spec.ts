import { Test, TestingModule } from '@nestjs/testing';

import { DragonResolver } from '../dragon.resolver';

describe('DragonResolver', () => {
  let resolver: DragonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DragonResolver],
    }).compile();

    resolver = module.get<DragonResolver>(DragonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
