import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { Core } from './models/Core.model';
import { CoreService } from './core.service';
import { CoreQuery } from './models/CoreQuery.model';

@Resolver()
export class CoreResolver {
  constructor(private readonly coreService: CoreService) {}

  @Query(() => [Core])
  async getAllCores() {
    return this.coreService.getAllCores();
  }

  @Query(() => Core)
  async getCoreById(@Args('id', { type: () => String }) id: string) {
    return this.coreService.getCoreById(id);
  }

  @Query(() => CoreQuery)
  async getCoreByQuery(
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number,
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 10 })
    limit: number,
    @Args('sort', { type: () => String, nullable: true }) sort: string,
  ) {
    return this.coreService.getCoreQuery(page, limit, sort);
  }
}