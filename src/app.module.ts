import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { HttpConfigService } from './http-config/http-config.service';
import { LaunchModule } from './launch/launch.module';
import { CoreModule } from './core/core.module';
import { RocketModule } from './rocket/rocket.module';
import { CompanyInfoModule } from './company-info/company-info.module';
import { RoadsterModule } from './roadster/roadster.module';
import { CapsuleModule } from './capsule/capsule.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    LaunchModule,
    CoreModule,
    RocketModule,
    RoadsterModule,
    CompanyInfoModule,
    CapsuleModule,
  ],
  providers: [HttpConfigService],
})
export class AppModule {}
