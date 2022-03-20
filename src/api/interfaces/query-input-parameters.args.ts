import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class QueryInputParameters {
  @Field(() => Int, { defaultValue: 0, nullable: true })
  page?: number;

  @Field({ nullable: true })
  sort?: string;

  @Field(() => Int, { defaultValue: 10, nullable: true })
  limit?: number;
}
