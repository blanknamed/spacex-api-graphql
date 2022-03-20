import { Module } from '@nestjs/common';
import { ApiModule } from '@api/api.module';

import { RocketResolver } from './rocket.resolver';
import { RocketService } from './rocket.service';

@Module({
  imports: [ApiModule],
  providers: [RocketResolver, RocketService],
  exports: [RocketService],
})
export class RocketModule {}
