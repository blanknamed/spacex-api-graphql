import { Field, ObjectType } from '@nestjs/graphql';

import { LaunchPadStatus } from '../enums/LaunchPadStatus.enum';

@ObjectType()
export class LaunchPad {
  @Field(() => String)
  name: string;

  @Field(() => String)
  fullName: string;

  @Field(() => LaunchPadStatus)
  status: LaunchPadStatus;

  @Field(() => String)
  locality: string;

  @Field(() => String)
  region: string;

  @Field(() => Number)
  latitude: number;

  @Field(() => Number)
  longitude: number;

  @Field(() => Number)
  launchAttempts: number;

  @Field(() => Number)
  launchSuccesses: number;

  @Field(() => String)
  wikipedia: string;

  @Field(() => String)
  details: string;

  @Field(() => String)
  timezone: string;

  @Field(() => [String], { nullable: 'items' })
  launches: string[];

  @Field(() => [String], { nullable: 'items' })
  rockets: string[];

  @Field(() => String)
  id: string;
}
