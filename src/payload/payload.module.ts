import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UtilsModule } from '@app/utils';

import { HttpConfigService } from '../http-config/http-config.service';
import { LaunchModule } from '../launch/launch.module';
import { LaunchService } from '../launch/launch.service';

import { PayloadResolver } from './payload.resolver';
import { PayloadService } from './payload.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
    UtilsModule,
    LaunchModule,
  ],
  providers: [PayloadResolver, PayloadService, LaunchService],
})
export class PayloadModule {}
