import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryInputParameters } from '@app/interfaces';

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
    @Args()
    { page, limit, sort }: QueryInputParameters,
  ) {
    return this.rocketService.getRocketByQuery(page, limit, sort);
  }
}
