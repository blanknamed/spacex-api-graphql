import { Field, ObjectType } from '@nestjs/graphql';
import { SizeUnits } from '@interfaces';

@ObjectType()
export class CompositeFairing {
  @Field(() => SizeUnits)
  height: SizeUnits;

  @Field(() => SizeUnits)
  diameter: SizeUnits;
}
