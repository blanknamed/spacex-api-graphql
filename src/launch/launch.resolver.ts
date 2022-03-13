import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

import { RocketService } from '../rocket/rocket.service';
import { Rocket } from '../rocket/models/Rocket.model';

import { Launch } from './models/Launch.model';
import { LaunchQuery } from './models/LaunchQuery.model';
import { LaunchService } from './launch.service';

@Resolver(() => Launch)
export class LaunchResolver {
  constructor(
    private readonly launchService: LaunchService,
    private readonly rocketService: RocketService,
  ) {}

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
    return this.launchService.getLaunchQuery(page, limit, sort);
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

  @ResolveField('rocket', () => Rocket)
  async getRocketInfo(@Parent() launch: Launch) {
    return this.rocketService.getRocketById(launch.rocket);
  }
}
