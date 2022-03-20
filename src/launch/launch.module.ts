import { Module } from '@nestjs/common';
import { ApiModule } from '@api/api.module';

import { RocketModule } from '../rocket/rocket.module';

import { LaunchService } from './launch.service';
import { LaunchResolver } from './launch.resolver';

@Module({
  imports: [ApiModule, RocketModule],
  providers: [LaunchService, LaunchResolver],
  exports: [LaunchService],
})
export class LaunchModule {}
