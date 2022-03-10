import { Module } from '@nestjs/common';

import { ApiModule } from '../api/api.module';

import { LaunchesService } from './launches.service';

@Module({
  imports: [ApiModule],
  providers: [LaunchesService],
})
export class LaunchesModule {}
