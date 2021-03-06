import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { MassUnits, SizeUnits } from '@interfaces';

import { RocketStage } from './shared/RocketStage.model';
import { CompositeFairing } from './shared/CompositeFairing.model';
import { LandingLegs } from './shared/LandingLegs.model';
import { Engines } from './shared/Engines.model';
import { PayloadWeights } from './shared/PayloadWeights.model';

@ObjectType()
export class Rocket {
  @Field(() => String)
  name: string;

  @Field(() => String)
  type: string;

  @Field(() => Boolean)
  active: boolean;

  @Field(() => Int)
  stages: number;

  @Field(() => Int, { nullable: true })
  booster: number;

  @Field(() => Int)
  costPerLaunch: number;

  @Field(() => Int)
  successRatePct: number;

  @Field(() => String)
  firstFlight: string;

  @Field(() => String)
  country: string;

  @Field(() => String)
  company: string;

  @Field(() => SizeUnits)
  height: SizeUnits;

  @Field(() => SizeUnits)
  diameter: SizeUnits;

  @Field(() => MassUnits)
  mass: MassUnits;

  @Field(() => [PayloadWeights], { nullable: 'items' })
  payloadWeights: Array<PayloadWeights>;

  @Field(() => RocketStage)
  firstStage: RocketStage;

  @Field(() => RocketStage)
  secondStage: RocketStage;

  @Field(() => CompositeFairing, { nullable: true })
  compositeFairing: CompositeFairing;

  @Field(() => Engines)
  engines: Engines;

  @Field(() => LandingLegs)
  landingLegs: LandingLegs;

  @Field(() => [String], { nullable: 'items' })
  flickrImages: Array<string>;

  @Field(() => String, { nullable: true })
  wikipedia: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => ID)
  id: string;
}
