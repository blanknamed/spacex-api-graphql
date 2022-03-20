import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractQueryModel } from '@app/api/models/AbstractQuery.model';

import { Crew } from './Crew.model';

@ObjectType()
export class CrewQuery extends AbstractQueryModel {
  @Field(() => [Crew], { nullable: 'items' })
  docs: Crew[];
}
