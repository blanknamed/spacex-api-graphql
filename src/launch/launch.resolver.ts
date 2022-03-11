import { Resolver, Query } from '@nestjs/graphql';

import { Launch } from './models/launch.model';
import { LaunchService } from './launch.service';

@Resolver(() => Launch)
export class LaunchResolver {
  constructor(private launchService: LaunchService) {}

  @Query(() => Launch)
  async nextLaunch() {
    return this.launchService.getNextLaunch();
  }

  // @ResolveField()
  // async posts(@Parent() author: Author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
