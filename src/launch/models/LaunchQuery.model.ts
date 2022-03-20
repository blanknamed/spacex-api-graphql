import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractQueryModel } from '@app/api/models/AbstractQuery.model';

import { Launch } from './Launch.model';

@ObjectType()
export class LaunchQuery extends AbstractQueryModel {
  @Field(() => [Launch], { nullable: true })
  docs: Launch[];
}
