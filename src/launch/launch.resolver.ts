import { Resolver, Query, Args, Int } from '@nestjs/graphql';

import { Launch } from './models/Launch.model';
import { LaunchQuery } from './models/LaunchQuery.model';
import { LaunchService } from './launch.service';

@Resolver(() => Launch)
export class LaunchResolver {
  constructor(private launchService: LaunchService) {}

  @Query(() => [Launch])
  async getAllLaunches() {
    return this.launchService.getAllLaunches();
  }

  @Query(() => Launch)
  async getNextLaunch() {
    return this.launchService.getNextLaunch();
  }

  @Query(() => Launch)
  async getLaunchById(@Args('id', { type: () => String }) id: string) {
    return this.launchService.getLaunchById(id);
  }

  // !TODO: Need to add filtration
  @Query(() => LaunchQuery)
  async getPaginatedLaunch(
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number,
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 10 })
    limit: number,
    @Args('sort', { type: () => String, nullable: true }) sort: string,
  ) {
    return this.launchService.getPaginatedLaunch(page, limit, sort);
  }

  @Query(() => Launch)
  async getLatestLaunch() {
    return this.launchService.getLatestLaunch();
  }

  @Query(() => [Launch])
  async getPastLaunches() {
    return this.launchService.getPastLaunches();
  }

  @Query(() => [Launch])
  async getUpcomingLaunches() {
    return this.launchService.getUpcomingLaunches();
  }

  // @ResolveField('cores', () => [Core], { nullable: true })
  // async getLaunchCores(@Parent() launch: Launch) {
  //   return launch;
  // }
}
