import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DragonPayload {
  @Field(() => String, { nullable: true })
  capsule?: string;

  @Field(() => Number, { nullable: true })
  massReturnedKg?: number;

  @Field(() => Number, { nullable: true })
  massReturnedLbs?: number;

  @Field(() => Number, { nullable: true })
  flightTimeSec: number;

  @Field(() => String, { nullable: true })
  manifest?: string;

  @Field(() => Boolean, { nullable: true })
  waterLanding?: boolean;

  @Field(() => Boolean, { nullable: true })
  landLanding?: boolean;
}
