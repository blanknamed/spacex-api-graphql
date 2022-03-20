import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SizeUnits {
  @Field(() => Float)
  meters: number;

  @Field(() => Float)
  feet: number;
}

@ObjectType()
export class MassUnits {
  @Field(() => Number)
  kg: number;

  @Field(() => Number)
  lb: number;
}

@ObjectType()
export class ThrustUnits {
  @Field(() => Number)
  kN: number;

  @Field(() => Number)
  lbf: number;
}

@ObjectType()
export class VolumeUnits {
  @Field(() => Number)
  cubicMeters: number;

  @Field(() => Number)
  cubicFeet: number;
}
