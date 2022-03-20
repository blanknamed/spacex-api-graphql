import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryInputParameters } from '@api/interfaces';

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
    @Args()
    { page, limit, sort }: QueryInputParameters,
  ) {
    this.launchPadService.getLaunchPadByQuery(page, limit, sort);
  }
}
