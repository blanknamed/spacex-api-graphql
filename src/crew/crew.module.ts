import { Module } from '@nestjs/common';
import { UtilsModule } from '@app/utils';

import { ApiModule } from '../api/api.module';

import { CrewResolver } from './crew.resolver';
import { CrewService } from './crew.service';

@Module({
  imports: [ApiModule, UtilsModule],
  providers: [CrewResolver, CrewService],
  exports: [CrewService],
})
export class CrewModule {}
