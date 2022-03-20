import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MassUnits, SizeUnits, VolumeUnits } from '@interfaces';

import { HeatShield } from './HeatShield.model';
import { Thrusters } from './Thrusters.model';
import { TrunkInfo } from './PayloadSizes.model';

@ObjectType()
export class Dragon {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  type: string;

  @Field(() => Boolean)
  active: string;

  @Field(() => Int)
  crewCapacity: number;

  @Field(() => Number, { nullable: true })
  sidewallAngleDeg?: number;

  @Field(() => Number, { nullable: true })
  orbitDurationYr?: number;

  @Field(() => Number)
  dryMassKg: number;

  @Field(() => Number)
  dryMassLb: number;

  @Field(() => String)
  firstFlight: string;

  @Field(() => HeatShield)
  heatShield: HeatShield;

  @Field(() => [Thrusters])
  thrusters: Thrusters[];

  @Field(() => MassUnits)
  launchPayloadMass: MassUnits;

  @Field(() => VolumeUnits)
  launchPayloadVol: VolumeUnits;

  @Field(() => MassUnits)
  returnPayloadMass: MassUnits;

  @Field(() => VolumeUnits)
  returnPayloadVol: VolumeUnits;

  @Field(() => TrunkInfo)
  trunk: TrunkInfo;

  @Field(() => SizeUnits)
  heightWTrunk: SizeUnits;

  @Field(() => SizeUnits)
  diameter: SizeUnits;

  @Field(() => [String], { nullable: 'items' })
  flickrImages: string[];

  @Field(() => String, { nullable: true })
  wikipedia: string;

  @Field(() => String, { nullable: true })
  description: string;
}
