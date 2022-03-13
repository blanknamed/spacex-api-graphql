import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { HttpConfigService } from './http-config/http-config.service';
import { LaunchModule } from './launch/launch.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    LaunchModule,
    CoreModule,
  ],
  providers: [HttpConfigService],
})
export class AppModule {}
