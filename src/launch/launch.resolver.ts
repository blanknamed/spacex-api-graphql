import { Resolver, Query, Args, Int } from '@nestjs/graphql';

import { Launch } from './models/launch.model';
import { LaunchQuery } from './models/launchQuery.model';
import { LaunchService } from './launch.service';

@Resolver(() => Launch)
export class LaunchResolver {
  constructor(private launchService: LaunchService) {}

  @Query(() => Launch)
  async nextLaunch() {
    return this.launchService.getNextLaunch();
  }

  @Query(() => Launch)
  async getLaunchById(@Args('id', { type: () => String }) id: string) {
    return this.launchService.getLaunchById(id);
  }

  @Query(() => LaunchQuery)
  async getLaunchByQuery(@Args('id', { type: () => String }) id: string) {
    return this.launchService.getLaunchById(id);
  }

  @Query(() => LaunchQuery)
  async getPaginatedLaunch(
    @Args('page', { type: () => Int }) page: number,
    @Args('limit', { type: () => Int }) limit: number,
    @Args('sort', { type: () => String, nullable: true }) sort: string,
  ) {
    return this.launchService.getPaginatedLaunch(page, limit, sort);
  }

  // @ResolveField()
  // async posts(@Parent() author: Author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
