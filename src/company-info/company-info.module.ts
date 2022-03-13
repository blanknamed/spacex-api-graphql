import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UtilsModule } from '@app/utils';

import { HttpConfigService } from '../http-config/http-config.service';

import { CompanyInfoService } from './company-info.service';
import { CompanyInfoResolver } from './company-info.resolver';

@Module({
  providers: [CompanyInfoService, CompanyInfoResolver],
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
    UtilsModule,
  ],
})
export class CompanyInfoModule {}
