import { Field, ObjectType } from '@nestjs/graphql';

import { ThrustUnits } from './Units.model';

@ObjectType()
export class RocketStage {
  @Field(() => Boolean)
  reusable: boolean;

  @Field(() => Number)
  engines: number;

  @Field(() => Number)
  fuelAmountTons: number;

  @Field(() => Number)
  burnTimeSec: number;

  @Field(() => ThrustUnits)
  thrustSeaLevel: ThrustUnits;

  @Field(() => ThrustUnits)
  thrustVacuum: ThrustUnits;
}