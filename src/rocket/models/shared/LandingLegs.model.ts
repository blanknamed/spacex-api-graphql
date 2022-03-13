import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LandingLegs {
  @Field(() => Int)
  number: number;

  @Field(() => String)
  material: string;
}
