import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractQueryModel } from '@app/utils';

import { Core } from './Core.model';

@ObjectType()
export class CoreQuery extends AbstractQueryModel {
  @Field(() => [Core], { nullable: true })
  docs: Core[];
}
