import { Field, ObjectType } from '@nestjs/graphql';

import { Core } from './Core.model';

@ObjectType()
export class CoreQuery {
  @Field(() => [Core], { nullable: true })
  docs: Core[];

  @Field(() => Number)
  totalDocs: number;

  @Field(() => Number)
  limit: number;

  @Field(() => Number)
  totalPages: number;

  @Field(() => Number)
  page: number;

  @Field(() => Number)
  pagingCounter: number;

  @Field(() => Boolean)
  hasPrevPage: boolean;

  @Field(() => Boolean)
  hasNextPage: boolean;

  @Field(() => Number, { nullable: true })
  prevPage: number;

  @Field(() => Number, { nullable: true })
  nextPage: number;
}
