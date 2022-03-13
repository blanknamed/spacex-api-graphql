import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { LandPadService } from './landpad.service';
import { LandpadQuery } from './models/LandPadQuery.model';
import { LandPad } from './models/LandPad.model';

@Resolver()
export class LandPadResolver {
  constructor(private readonly landPadService: LandPadService) {}

  @Query(() => [LandPad])
  getAllLandPads() {
    return this.landPadService.getAllLandPads();
  }

  @Query(() => LandPad)
  getLandPadById(@Args('id', { type: () => String }) id: string) {
    return this.landPadService.getLandPadById(id);
  }

  @Query(() => LandpadQuery)
  getLandPadByQuery(
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number,
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 10 })
    limit: number,
    @Args('sort', { type: () => String, nullable: true }) sort: string,
  ) {
    return this.landPadService.getLandPadByQuery(page, limit, sort);
  }
}
