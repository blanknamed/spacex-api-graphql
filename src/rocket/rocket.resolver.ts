import { Args, Int, Resolver, Query } from '@nestjs/graphql';

import { RocketService } from './rocket.service';
import { Rocket } from './models/Rocket.model';
import { RocketQuery } from './models/RocketQuery.model';

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

  @Query(() => RocketQuery)
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
