import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ThrustUnits } from '@app/interfaces';

@ObjectType()
export class Thrusters {
  @Field(() => String)
  type: string;

  @Field(() => Int)
  amount?: string;

  @Field(() => Int)
  pods: string;

  @Field(() => String)
  fuel1: string;

  @Field(() => String)
  fuel2: string;

  @Field(() => Int)
  isp: string;

  @Field(() => ThrustUnits)
  thrust: ThrustUnits;
}
