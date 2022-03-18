import { Module } from '@nestjs/common';
import { UtilsModule } from '@app/utils';

import { RocketModule } from '../rocket/rocket.module';
import { ApiModule } from '../api/api.module';

import { LaunchService } from './launch.service';
import { LaunchResolver } from './launch.resolver';

@Module({
  imports: [ApiModule, UtilsModule, RocketModule],
  providers: [LaunchService, LaunchResolver],
  exports: [LaunchService],
})
export class LaunchModule {}
