import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UtilsModule } from '@app/utils';

import { HttpConfigService } from '../http-config/http-config.service';

import { RocketResolver } from './rocket.resolver';
import { RocketService } from './rocket.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
    UtilsModule,
  ],
  providers: [RocketResolver, RocketService],
})
export class RocketModule {}
