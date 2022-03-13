import { AbstractQueryModel } from '@app/utils';
import { Field, ObjectType } from '@nestjs/graphql';

import { Dragon } from './Dragon.model';

@ObjectType()
export class DragonQuery extends AbstractQueryModel {
  @Field(() => [Dragon], { nullable: true })
  docs: Dragon[];
}
