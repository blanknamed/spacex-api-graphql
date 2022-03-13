import { Test, TestingModule } from '@nestjs/testing';

import { CompanyInfoResolver } from '../company-info.resolver';

describe('CompanyInfoResolver', () => {
  let resolver: CompanyInfoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyInfoResolver],
    }).compile();

    resolver = module.get<CompanyInfoResolver>(CompanyInfoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
