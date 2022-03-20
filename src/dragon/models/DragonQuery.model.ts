import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractQueryModel } from '@api/models/AbstractQuery.model';

import { Dragon } from './Dragon.model';

@ObjectType()
export class DragonQuery extends AbstractQueryModel {
  @Field(() => [Dragon], { nullable: true })
  docs: Dragon[];
}
