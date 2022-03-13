import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UtilsModule } from '@app/utils';

import { HttpConfigService } from '../http-config/http-config.service';

import { CapsuleService } from './capsule.service';
import { CapsuleResolver } from './capsule.resolver';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
    UtilsModule,
  ],
  providers: [CapsuleService, CapsuleResolver],
})
export class CapsuleModule {}
