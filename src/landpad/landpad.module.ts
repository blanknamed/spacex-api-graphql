import { Module } from '@nestjs/common';
import { UtilsModule } from '@app/utils';

import { ApiModule } from '../api/api.module';

import { LandPadResolver } from './landpad.resolver';
import { LandPadService } from './landpad.service';

@Module({
  imports: [ApiModule, UtilsModule],
  providers: [LandPadResolver, LandPadService],
  exports: [LandPadService],
})
export class LandPadModule {}
