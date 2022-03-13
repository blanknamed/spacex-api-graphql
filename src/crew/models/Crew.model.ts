import { Field, ObjectType } from '@nestjs/graphql';

import { CrewStatus } from '../enums/crewStatus.enum';

@ObjectType()
export class Crew {
  @Field(() => String)
  name: string;

  @Field(() => String)
  agency: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => String, { nullable: true })
  wikipedia: string;

  @Field(() => [String], { nullable: 'items' })
  launches: string[];

  @Field(() => CrewStatus)
  status: CrewStatus;

  @Field(() => String)
  id: string;
}
