import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UtilsModule } from '@app/utils';

import { HttpConfigService } from '../http-config/http-config.service';

import { CoreService } from './core.service';
import { CoreResolver } from './core.resolver';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
    UtilsModule,
  ],
  providers: [CoreService, CoreResolver],
})
export class CoreModule {}
