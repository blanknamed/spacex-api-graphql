import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractQueryModel } from '@api/models/AbstractQuery.model';

import { Core } from './Core.model';

@ObjectType()
export class CoreQuery extends AbstractQueryModel {
  @Field(() => [Core], { nullable: true })
  docs: Core[];
}
