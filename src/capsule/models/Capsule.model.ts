import { Field, ObjectType } from '@nestjs/graphql';

import { CapsuleStatus } from '../enums/CapsuleStatus.enum';
import { DragonType } from '../enums/DragonType.enum';

@ObjectType()
export class Capsule {
  @Field(() => String)
  serial: string;

  @Field(() => CapsuleStatus)
  status: CapsuleStatus;

  @Field(() => DragonType)
  type: DragonType;

  @Field(() => String, { nullable: true })
  dragon?: string;

  @Field(() => Number)
  reuseCount: number;

  @Field(() => Number)
  waterLandings: number;

  @Field(() => Number)
  landLandings: number;

  @Field(() => String, { nullable: true })
  lastUpdate?: string;

  @Field(() => [String])
  launches: string[];
}
