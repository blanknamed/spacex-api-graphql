import { Field, ObjectType } from '@nestjs/graphql';

import { LandingType } from '../enums/landingTypes';

@ObjectType()
export class Core {
  @Field(() => String)
  core: string;

  @Field(() => Number)
  flight: number;

  @Field(() => Boolean)
  gridfins: boolean;

  @Field(() => Boolean)
  legs: boolean;

  @Field(() => Boolean)
  reused: boolean;

  @Field(() => Boolean)
  landingAttempt: boolean;

  @Field(() => Boolean)
  landingSuccess: boolean;

  @Field(() => LandingType)
  landingType: LandingType;

  //! TODO: Change to Landpad
  @Field(() => String)
  landpad: string;
}
