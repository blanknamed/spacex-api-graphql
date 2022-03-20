import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractQueryModel } from '@app/api/models/AbstractQuery.model';

import { Payload } from './Payload.model';

@ObjectType()
export class PayloadQuery extends AbstractQueryModel {
  @Field(() => [Payload], { nullable: 'items' })
  docs: Payload[];
}
