import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { CapsuleService } from './capsule.service';
import { Capsule } from './models/Capsule.model';
import { CapsuleQuery } from './models/CapsuleQuery.model';

@Resolver()
export class CapsuleResolver {
  constructor(private readonly capsuleService: CapsuleService) {}

  @Query(() => [Capsule])
  getAllCapsules() {
    return this.capsuleService.getAllCapsules();
  }

  @Query(() => Capsule)
  getCapsuleById(@Args('id', { type: () => String }) id: string) {
    return this.capsuleService.getCapsuleById(id);
  }

  @Query(() => CapsuleQuery)
  getCapsuleByQuery(
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number,
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 10 })
    limit: number,
    @Args('sort', { type: () => String, nullable: true }) sort: string,
  ) {
    return this.capsuleService.getCapsuleByQuery(page, limit, sort);
  }
}
