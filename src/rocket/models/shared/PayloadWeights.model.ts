import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PayloadWeights {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  kg: number;

  @Field(() => Int)
  lb: number;
}
