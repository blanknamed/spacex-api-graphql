import { AbstractQueryModel } from '@app/utils';
import { Field, ObjectType } from '@nestjs/graphql';

import { LandPad } from './LandPad.model';

@ObjectType()
export class LandpadQuery extends AbstractQueryModel {
  @Field(() => [LandPad], { nullable: 'items' })
  docs: LandPad[];
}
