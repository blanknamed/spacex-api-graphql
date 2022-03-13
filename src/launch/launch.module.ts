import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UtilsModule } from '@app/utils';

import { HttpConfigService } from '../http-config/http-config.service';
import { RocketModule } from '../rocket/rocket.module';
import { RocketService } from '../rocket/rocket.service';

import { LaunchService } from './launch.service';
import { LaunchResolver } from './launch.resolver';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
    RocketModule,
    UtilsModule,
  ],
  providers: [LaunchService, LaunchResolver, RocketService],
})
export class LaunchModule {}
