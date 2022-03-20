import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryInputParameters } from '@app/interfaces';

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
    @Args()
    { page, limit, sort }: QueryInputParameters,
  ) {
    return this.capsuleService.getCapsuleByQuery(page, limit, sort);
  }
}
