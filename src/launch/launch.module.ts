import { Module } from '@nestjs/common';
import { UtilsModule } from '@app/utils';

import { RocketModule } from '../rocket/rocket.module';
import { RocketService } from '../rocket/rocket.service';
import { ApiModule } from '../api/api.module';
import { ApiService } from '../api/api.service';

import { LaunchService } from './launch.service';
import { LaunchResolver } from './launch.resolver';

@Module({
  imports: [ApiModule, RocketModule, UtilsModule],
  providers: [ApiService, LaunchService, LaunchResolver, RocketService],
})
export class LaunchModule {}
