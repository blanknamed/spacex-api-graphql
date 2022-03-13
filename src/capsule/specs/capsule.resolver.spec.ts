import { Test, TestingModule } from '@nestjs/testing';

import { CapsuleResolver } from '../capsule.resolver';

describe('CapsuleResolver', () => {
  let resolver: CapsuleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CapsuleResolver],
    }).compile();

    resolver = module.get<CapsuleResolver>(CapsuleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
