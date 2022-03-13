import { Field, Int, ObjectType } from '@nestjs/graphql';

import { ThrustUnits } from './Units.model';
import { ISP } from './ISP.model';

@ObjectType()
export class Engines {
  @Field(() => Int)
  number: number;

  @Field(() => String)
  type: string;

  @Field(() => String)
  version: string;

  @Field(() => String)
  layout: string;

  @Field(() => ISP)
  isp: ISP;

  @Field(() => Int)
  engineLossMax: number;

  @Field(() => String)
  propellant1: string;

  @Field(() => String)
  propellant2: string;

  @Field(() => ThrustUnits)
  thrustSeaLevel: ThrustUnits;

  @Field(() => ThrustUnits)
  thrustVacuum: ThrustUnits;

  @Field(() => Int)
  thrustToWeight: number;
}
