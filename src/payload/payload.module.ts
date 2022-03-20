import { Module } from '@nestjs/common';
import { ApiModule } from '@app/api/api.module';

import { LaunchModule } from '../launch/launch.module';

import { PayloadResolver } from './payload.resolver';
import { PayloadService } from './payload.service';

@Module({
  imports: [ApiModule, LaunchModule],
  providers: [PayloadResolver, PayloadService],
  exports: [PayloadService],
})
export class PayloadModule {}
