import { Module } from '@nestjs/common';
import { ApiModule } from '@app/api/api.module';

import { CompanyInfoService } from './company-info.service';
import { CompanyInfoResolver } from './company-info.resolver';

@Module({
  imports: [ApiModule],
  providers: [CompanyInfoService, CompanyInfoResolver],
})
export class CompanyInfoModule {}
