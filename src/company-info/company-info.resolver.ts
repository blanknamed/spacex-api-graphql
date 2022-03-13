import { Resolver, Query } from '@nestjs/graphql';

import { CompanyInfoService } from './company-info.service';
import { CompanyInfo } from './models/CompanyInfo.model';

@Resolver()
export class CompanyInfoResolver {
  constructor(private readonly companyInfoService: CompanyInfoService) {}

  @Query(() => CompanyInfo)
  getCompanyInfo() {
    return this.companyInfoService.getCompanyInfo();
  }
}
