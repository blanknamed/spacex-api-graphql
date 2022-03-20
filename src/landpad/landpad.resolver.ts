import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryInputParameters } from '@app/interfaces';

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
    @Args()
    { page, limit, sort }: QueryInputParameters,
  ) {
    return this.landPadService.getLandPadByQuery(page, limit, sort);
  }
}
