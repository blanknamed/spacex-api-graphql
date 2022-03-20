import { Module } from '@nestjs/common';
import { ApiModule } from '@app/api/api.module';

import { RoadsterService } from './roadster.service';
import { RoadsterResolver } from './roadster.resolver';

@Module({
  imports: [ApiModule],
  providers: [RoadsterService, RoadsterResolver],
  exports: [RoadsterService],
})
export class RoadsterModule {}
