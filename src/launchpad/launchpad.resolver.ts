import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { LaunchPadService } from './launchpad.service';
import { LaunchPad } from './models/LaunchPad.model';
import { LaunchPadQuery } from './models/LaunchPadQuery.model';

@Resolver()
export class LaunchpadResolver {
  constructor(private readonly launchPadService: LaunchPadService) {}

  @Query(() => [LaunchPad])
  getAllLaunchPads() {
    return this.launchPadService.getAllLaunchPads();
  }

  @Query(() => LaunchPad)
  getLaunchPadById(@Args('id', { type: () => String }) id: string) {
    return this.launchPadService.getLaunchPadById(id);
  }

  @Query(() => LaunchPadQuery)
  getLaunchPadByQuery(
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number,
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 10 })
    limit: number,
    @Args('sort', { type: () => String, nullable: true }) sort: string,
  ) {
    this.launchPadService.getLaunchPadByQuery(page, limit, sort);
  }
}
