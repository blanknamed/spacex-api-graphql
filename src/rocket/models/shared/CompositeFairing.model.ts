import { Field, ObjectType } from '@nestjs/graphql';
import { SizeUnits } from '@app/interfaces';

@ObjectType()
export class CompositeFairing {
  @Field(() => SizeUnits)
  height: SizeUnits;

  @Field(() => SizeUnits)
  diameter: SizeUnits;
}
