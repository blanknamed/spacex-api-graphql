import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryInputParameters } from '@api/interfaces';

import { CrewService } from './crew.service';
import { CrewQuery } from './models/CrewQuery.model';
import { Crew } from './models/Crew.model';

@Resolver()
export class CrewResolver {
  constructor(private readonly crewService: CrewService) {}

  @Query(() => [Crew])
  getAllCrew() {
    return this.crewService.getAllCrew();
  }

  @Query(() => Crew)
  getCrewById(@Args('id', { type: () => String }) id: string) {
    return this.crewService.getCrewById(id);
  }

  @Query(() => CrewQuery)
  getCrewByQuery(
    @Args()
    { page, limit, sort }: QueryInputParameters,
  ) {
    return this.crewService.getCrewByQuery(page, limit, sort);
  }
}
