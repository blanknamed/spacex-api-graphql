import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryInputParameters } from '@api/interfaces';

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
    @Args()
    { page, limit, sort }: QueryInputParameters,
  ) {
    this.dragonService.getDragonByQuery(page, limit, sort);
  }
}
