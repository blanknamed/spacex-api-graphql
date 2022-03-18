import { Module } from '@nestjs/common';
import { UtilsModule } from '@app/utils';

import { ApiModule } from '../api/api.module';

import { CapsuleService } from './capsule.service';
import { CapsuleResolver } from './capsule.resolver';

@Module({
  imports: [ApiModule, UtilsModule],
  providers: [CapsuleService, CapsuleResolver],
})
export class CapsuleModule {}
