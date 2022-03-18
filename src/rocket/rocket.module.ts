import { Module } from '@nestjs/common';
import { UtilsModule } from '@app/utils';

import { ApiModule } from '../api/api.module';

import { RocketResolver } from './rocket.resolver';
import { RocketService } from './rocket.service';

@Module({
  imports: [ApiModule, UtilsModule],
  providers: [RocketResolver, RocketService],
  exports: [RocketService],
})
export class RocketModule {}
