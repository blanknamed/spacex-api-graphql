import { Args, Int, Resolver, Query } from '@nestjs/graphql';

import { LaunchQuery } from '../launch/models/LaunchQuery.model';

import { RocketService } from './rocket.service';
import { Rocket } from './models/Rocket.model';

@Resolver()
export class RocketResolver {
  constructor(private readonly rocketService: RocketService) {}

  @Query(() => [Rocket])
  async getAllRockets() {
    return this.rocketService.getAllRockets();
  }

  @Query(() => Rocket)
  async getRocketById(@Args('id') id: string) {
    return this.rocketService.getRocketById(id);
  }

  @Query(() => LaunchQuery)
  async getRocketByQuery(
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number,
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 10 })
    limit: number,
    @Args('sort', { type: () => String, nullable: true }) sort: string,
  ) {
    return this.rocketService.getRocketByQuery(page, limit, sort);
  }
}
