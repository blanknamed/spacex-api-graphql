import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SizeUnits {
  @Field(() => Int)
  meters: number;

  @Field(() => Int)
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
  @Field(() => Float)
  kN: number;

  @Field(() => Float)
  lbf: number;
}
