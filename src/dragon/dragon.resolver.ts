import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { DragonService } from './dragon.service';
import { Dragon } from './models/Dragon.model';
import { DragonQuery } from './models/DragonQuery.model';

@Resolver()
export class DragonResolver {
  constructor(private readonly dragonService: DragonService) {}

  @Query(() => [Dragon])
  getAllDragons() {
    return this.dragonService.getAllDragons();
  }

  @Query(() => Dragon)
  getDragonById(@Args('id') id: string) {
    return this.dragonService.getDragonById(id);
  }

  @Query(() => DragonQuery)
  getDragonByQuery(
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number,
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 10 })
    limit: number,
    @Args('sort', { type: () => String, nullable: true }) sort: string,
  ) {
    this.dragonService.getDragonByQuery(page, limit, sort);
  }
}
