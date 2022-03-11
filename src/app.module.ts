import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { LaunchModule } from './launch/launch.module';
import { HttpConfigService } from './http-config/http-config.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    LaunchModule,
  ],
  providers: [HttpConfigService],
})
export class AppModule {}
