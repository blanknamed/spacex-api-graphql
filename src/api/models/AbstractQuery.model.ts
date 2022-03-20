import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export class AbstractQueryModel {
  @Field(() => Int)
  totalDocs: number;

  @Field(() => Int)
  limit: number;

  @Field(() => Int)
  totalPages: number;

  @Field(() => Int)
  page: number;

  @Field(() => Int)
  pagingCounter: number;

  @Field(() => Boolean)
  hasPrevPage: boolean;

  @Field(() => Boolean)
  hasNextPage: boolean;

  @Field(() => Int, { nullable: true })
  prevPage: number;

  @Field(() => Int, { nullable: true })
  nextPage: number;
}
