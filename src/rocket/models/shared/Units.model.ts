import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SizeUnits {
  @Field(() => Float)
  meters: number;

  @Field(() => Float)
  feet: number;
}

@ObjectType()
export class MassUnits {
  @Field(() => Int)
  kg: number;

  @Field(() => Int)
  lb: number;
}

@ObjectType()
export class ThrustUnits {
  @Field(() => Int)
  kN: number;

  @Field(() => Int)
  lbf: number;
}
