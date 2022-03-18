import { Module } from '@nestjs/common';
import { UtilsModule } from '@app/utils';

import { ApiModule } from '../api/api.module';

import { CoreService } from './core.service';
import { CoreResolver } from './core.resolver';

@Module({
  imports: [ApiModule, UtilsModule],
  providers: [CoreService, CoreResolver],
  exports: [CoreService],
})
export class CoreModule {}
