import { Module } from '@nestjs/common';
import { ApiModule } from '@api/api.module';

import { CoreService } from './core.service';
import { CoreResolver } from './core.resolver';

@Module({
  imports: [ApiModule],
  providers: [CoreService, CoreResolver],
  exports: [CoreService],
})
export class CoreModule {}
