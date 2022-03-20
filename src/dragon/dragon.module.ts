import { Module } from '@nestjs/common';
import { ApiModule } from '@api/api.module';

import { DragonResolver } from './dragon.resolver';
import { DragonService } from './dragon.service';

@Module({
  imports: [ApiModule],
  providers: [DragonResolver, DragonService],
  exports: [DragonService],
})
export class DragonModule {}
