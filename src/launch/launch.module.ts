import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { HttpConfigService } from '../http-config/http-config.service';

import { LaunchService } from './launch.service';
import { LaunchResolver } from './launch.resolver';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [LaunchService, LaunchResolver],
})
export class LaunchModule {}
