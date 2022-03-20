import { Module } from '@nestjs/common';
import { ApiModule } from '@api/api.module';

import { LaunchpadResolver } from './launchpad.resolver';
import { LaunchPadService } from './launchpad.service';

@Module({
  imports: [ApiModule],
  providers: [LaunchpadResolver, LaunchPadService],
  exports: [LaunchPadService],
})
export class LaunchpadModule {}
