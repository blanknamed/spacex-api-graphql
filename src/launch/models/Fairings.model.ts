import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Fairings {
  @Field(() => Boolean, { nullable: true })
  reused?: boolean;

  @Field(() => Boolean, { nullable: true })
  recoveryAttempt?: boolean;

  @Field(() => Boolean, { nullable: true })
  recovered?: boolean;

  //! TODO: Switch to ships //UUID
  @Field(() => [String], { nullable: true })
  ships?: string[];
}
