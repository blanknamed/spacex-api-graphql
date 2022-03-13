import { Field, ObjectType } from '@nestjs/graphql';

import { Launch } from './launch.model';

@ObjectType()
export class LaunchQuery {
  @Field(() => [Launch], { nullable: true })
  docs: Launch[];

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
