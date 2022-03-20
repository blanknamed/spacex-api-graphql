import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { ThrustUnits } from '@app/interfaces';

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

  @Field(() => ThrustUnits, { nullable: true })
  thrustSeaLevel: ThrustUnits;

  @Field(() => ThrustUnits, { nullable: true })
  thrustVacuum: ThrustUnits;

  @Field(() => Float, { nullable: true })
  thrustToWeight: number;
}
