import { Module } from '@nestjs/common';
import { ApiModule } from '@api/api.module';

import { CrewResolver } from './crew.resolver';
import { CrewService } from './crew.service';

@Module({
  imports: [ApiModule],
  providers: [CrewResolver, CrewService],
  exports: [CrewService],
})
export class CrewModule {}
