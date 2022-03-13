import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Failure {
  @Field(() => Int, { nullable: true })
  time: number;

  @Field(() => Int, { nullable: true })
  altitude: number;

  @Field(() => String)
  reason: string;
}
