import { Query, Resolver } from '@nestjs/graphql';

import { RoadsterService } from './roadster.service';
import { Roadster } from './models/Roadster.model';

@Resolver()
export class RoadsterResolver {
  constructor(private readonly roadsterService: RoadsterService) {}

  @Query(() => Roadster)
  getRoadsterInfo() {
    return this.roadsterService.getRoadsterInfo();
  }
}
