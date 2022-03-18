import { Module } from '@nestjs/common';
import { UtilsModule } from '@app/utils';

import { ApiModule } from '../api/api.module';
import { ApiService } from '../api/api.service';

import { RocketResolver } from './rocket.resolver';
import { RocketService } from './rocket.service';

@Module({
  imports: [ApiModule, UtilsModule],
  providers: [ApiService, RocketResolver, RocketService],
})
export class RocketModule {}
