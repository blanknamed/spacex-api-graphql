import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { LaunchModule } from './launch/launch.module';
import { CoreModule } from './core/core.module';
import { RocketModule } from './rocket/rocket.module';
import { CapsuleModule } from './capsule/capsule.module';
import { CompanyInfoModule } from './company-info/company-info.module';
import { CrewModule } from './crew/crew.module';
import { DragonModule } from './dragon/dragon.module';
import { LandPadModule } from './landpad/landpad.module';
import { LaunchpadModule } from './launchpad/launchpad.module';
import { PayloadModule } from './payload/payload.module';
import { RoadsterModule } from './roadster/roadster.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    CapsuleModule,
    CompanyInfoModule,
    CoreModule,
    CrewModule,
    DragonModule,
    LandPadModule,
    LaunchModule,
    LaunchpadModule,
    PayloadModule,
    RoadsterModule,
    RocketModule,
  ],
})
export class AppModule {}
