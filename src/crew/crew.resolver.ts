import { Args, Int, Query, Resolver } from '@nestjs/graphql';

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
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number,
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 10 })
    limit: number,
    @Args('sort', { type: () => String, nullable: true }) sort: string,
  ) {
    return this.crewService.getCrewByQuery(page, limit, sort);
  }
}
