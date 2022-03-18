import { Module } from '@nestjs/common';
import { UtilsModule } from '@app/utils';

import { ApiModule } from '../api/api.module';

import { CompanyInfoService } from './company-info.service';
import { CompanyInfoResolver } from './company-info.resolver';

@Module({
  imports: [ApiModule, UtilsModule],
  providers: [CompanyInfoService, CompanyInfoResolver],
})
export class CompanyInfoModule {}
