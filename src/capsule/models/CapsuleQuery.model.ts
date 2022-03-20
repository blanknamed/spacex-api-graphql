import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractQueryModel } from '@app/api/models/AbstractQuery.model';

import { Capsule } from './Capsule.model';

@ObjectType()
export class CapsuleQuery extends AbstractQueryModel {
  @Field(() => [Capsule], { nullable: 'items' })
  docs: Capsule[];
}
