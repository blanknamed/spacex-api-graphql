import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { LaunchModule } from './launch/launch.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    LaunchModule,
    // CoreModule,
    // RocketModule,
    // RoadsterModule,
    // CompanyInfoModule,
    // CapsuleModule,
    // DragonModule,
    // CrewModule,
    // LandPadModule,
    // LaunchpadModule,
    // PayloadModule,
  ],
})
export class AppModule {}
