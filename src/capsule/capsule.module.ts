import { Module } from '@nestjs/common';
import { ApiModule } from '@api/api.module';

import { CapsuleService } from './capsule.service';
import { CapsuleResolver } from './capsule.resolver';

@Module({
  imports: [ApiModule],
  providers: [CapsuleService, CapsuleResolver],
})
export class CapsuleModule {}
