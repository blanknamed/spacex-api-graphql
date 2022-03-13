import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Headquarters {
  @Field(() => String)
  address: string;

  @Field(() => String)
  city: string;

  @Field(() => String)
  state: string;
}
