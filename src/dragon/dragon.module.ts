import { Module } from '@nestjs/common';
import { UtilsModule } from '@app/utils';

import { ApiModule } from '../api/api.module';

import { DragonResolver } from './dragon.resolver';
import { DragonService } from './dragon.service';

@Module({
  imports: [ApiModule, UtilsModule],
  providers: [DragonResolver, DragonService],
  exports: [DragonService],
})
export class DragonModule {}
