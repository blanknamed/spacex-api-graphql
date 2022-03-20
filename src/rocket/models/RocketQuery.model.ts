import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractQueryModel } from '@api/models/AbstractQuery.model';

import { Rocket } from './Rocket.model';

@ObjectType()
export class RocketQuery extends AbstractQueryModel {
  @Field(() => [Rocket])
  docs: Rocket[];
}
