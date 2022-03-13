import { Field, ObjectType, ID } from '@nestjs/graphql';

import { LandingType } from '../../core/enums/landingTypes';

@ObjectType()
export class LaunchCore {
  @Field(() => ID, {
    nullable: true,
    description: 'use Core queries to get more info',
  })
  core: string;

  @Field(() => Number, { nullable: true })
  flight: number;

  @Field(() => Boolean, { nullable: true })
  gridfins: boolean;

  @Field(() => Boolean, { nullable: true })
  legs: boolean;

  @Field(() => Boolean, { nullable: true })
  reused: boolean;

  @Field(() => Boolean, { nullable: true })
  landingAttempt: boolean;

  @Field(() => Boolean, { nullable: true })
  landingSuccess: boolean;

  @Field(() => LandingType, { nullable: true })
  landingType: LandingType;

  @Field(() => ID, { nullable: true })
  landpad: string;
}
