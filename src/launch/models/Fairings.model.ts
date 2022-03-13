import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Fairings {
  @Field(() => Boolean)
  reused: boolean;

  @Field(() => Boolean)
  recoveryAttempt: boolean;

  @Field(() => Boolean)
  recovered: boolean;

  //! TODO: Switch to ships //UUID
  @Field(() => [String])
  ships: string[];
}
