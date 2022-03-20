import { Test, TestingModule } from '@nestjs/testing';

import { PayloadResolver } from '../payload.resolver';

describe('PayloadResolver', () => {
  let resolver: PayloadResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayloadResolver],
    }).compile();

    resolver = module.get<PayloadResolver>(PayloadResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
