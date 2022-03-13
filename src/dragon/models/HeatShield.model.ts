import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HeatShield {
  @Field(() => String)
  material: string;

  @Field(() => Number)
  sizeMeters: number;

  @Field(() => Number)
  tempDegrees: string;

  @Field(() => String)
  devPartner: string;
}
