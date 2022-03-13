import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UtilsModule } from '@app/utils';

import { HttpConfigService } from '../http-config/http-config.service';

import { LaunchpadResolver } from './launchpad.resolver';
import { LaunchPadService } from './launchpad.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
    UtilsModule,
  ],
  providers: [LaunchpadResolver, LaunchPadService],
})
export class LaunchpadModule {}
