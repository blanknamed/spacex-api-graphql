import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { LaunchService } from '../launch/launch.service';
import { Launch } from '../launch/models/Launch.model';

import { Payload } from './models/Payload.model';
import { PayloadService } from './payload.service';
import { PayloadQuery } from './models/PayloadQuery.model';

@Resolver(() => Payload)
export class PayloadResolver {
  constructor(
    private readonly payloadService: PayloadService,
    private readonly launchService: LaunchService,
  ) {}

  @Query(() => [Payload])
  async getAllPayloads() {
    return this.payloadService.getAllPayloads();
  }

  @Query(() => Payload)
  async getPayloadById(@Args('id') id: string) {
    return this.payloadService.getPayloadById(id);
  }

  @Query(() => PayloadQuery)
  async getPayloadByQuery(
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number,
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 10 })
    limit: number,
    @Args('sort', { type: () => String, nullable: true }) sort: string,
  ) {
    return this.payloadService.getPayloadByQuery(page, limit, sort);
  }

  @ResolveField('launch', () => Launch)
  resolvePayloadLaunch(@Parent() payload: Payload) {
    return this.launchService.getLaunchById(payload.launch);
  }
}
