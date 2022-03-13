import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ISP {
  @Field(() => Float)
  seaLevel: number;

  @Field(() => Float)
  vacuum: number;
}
