import { Field, Int, ObjectType } from '@nestjs/graphql';

import { CoreStatus } from '../enums/status';

@ObjectType()
export class Core {
  @Field(() => String)
  serial: string;

  @Field(() => Int, { nullable: true })
  block: number;

  @Field(() => CoreStatus)
  status: CoreStatus;

  @Field(() => Int, { defaultValue: 0 })
  reuseCount: number;

  @Field(() => Int, { defaultValue: 0 })
  rtlsAttempts: number;

  @Field(() => Int, { defaultValue: 0 })
  rtlsLandings: number;

  @Field(() => Int, { defaultValue: 0 })
  asdsAttempts: number;

  @Field(() => Int, { defaultValue: 0 })
  asdsLandings: number;

  @Field(() => String, { nullable: true })
  lastUpdate: string;

  @Field(() => [String])
  launches: string[];
}
