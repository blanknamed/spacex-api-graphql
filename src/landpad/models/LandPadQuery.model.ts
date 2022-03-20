import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractQueryModel } from '@app/api/models/AbstractQuery.model';

import { LandPad } from './LandPad.model';

@ObjectType()
export class LandpadQuery extends AbstractQueryModel {
  @Field(() => [LandPad], { nullable: 'items' })
  docs: LandPad[];
}
