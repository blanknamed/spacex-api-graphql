import { Module } from '@nestjs/common';
import { UtilsModule } from '@app/utils';

import { ApiModule } from '../api/api.module';

import { RoadsterService } from './roadster.service';
import { RoadsterResolver } from './roadster.resolver';

@Module({
  imports: [ApiModule, UtilsModule],
  providers: [RoadsterService, RoadsterResolver],
  exports: [RoadsterService],
})
export class RoadsterModule {}
