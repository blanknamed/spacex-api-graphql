import { Field, ObjectType } from '@nestjs/graphql';

import { LandPadType } from '../enums/LandPadType.enum';
import { LandPadStatus } from '../enums/LandPadStatus.enum';

@ObjectType()
export class LandPad {
  @Field(() => String)
  name: string;

  @Field(() => LandPadStatus)
  status: LandPadStatus;

  @Field(() => String)
  fullName: string;

  @Field(() => LandPadType)
  type: LandPadType;

  @Field(() => String)
  locality: string;

  @Field(() => String)
  region: string;

  @Field(() => Number)
  latitude: number;

  @Field(() => Number)
  longitude: number;

  @Field(() => Number)
  landingAttempts: number;

  @Field(() => Number)
  landingSuccesses: number;

  @Field(() => String)
  details: string;

  @Field(() => [String], { nullable: 'items' })
  launches: string[];

  @Field(() => String)
  id: string;
}
