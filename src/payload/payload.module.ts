import { Module } from '@nestjs/common';
import { UtilsModule } from '@app/utils';

import { LaunchModule } from '../launch/launch.module';
import { ApiModule } from '../api/api.module';

import { PayloadResolver } from './payload.resolver';
import { PayloadService } from './payload.service';

@Module({
  imports: [ApiModule, UtilsModule, LaunchModule],
  providers: [PayloadResolver, PayloadService],
  exports: [PayloadService],
})
export class PayloadModule {}
