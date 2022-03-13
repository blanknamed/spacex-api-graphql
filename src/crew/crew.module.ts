import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UtilsModule } from '@app/utils';

import { HttpConfigService } from '../http-config/http-config.service';

import { CrewResolver } from './crew.resolver';
import { CrewService } from './crew.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
    UtilsModule,
  ],
  providers: [CrewResolver, CrewService],
})
export class CrewModule {}
