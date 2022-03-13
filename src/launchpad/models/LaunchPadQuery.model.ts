import { Field, ObjectType } from '@nestjs/graphql';

import { LaunchPad } from './LaunchPad.model';

@ObjectType()
export class LaunchPadQuery {
  @Field(() => [LaunchPad], { nullable: 'items' })
  docs: LaunchPad[];
}
