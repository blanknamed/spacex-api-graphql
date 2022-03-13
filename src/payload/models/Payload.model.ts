import { Field, ObjectType } from '@nestjs/graphql';

import { DragonPayload } from './DragonPayload.model';

@ObjectType()
export class Payload {
  @Field(() => DragonPayload)
  dragon?: DragonPayload;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  type: string;

  @Field(() => Boolean, { defaultValue: false })
  reused: boolean;

  @Field(() => String, { nullable: true })
  launch: string;

  @Field(() => [String], { nullable: true })
  customers: string[];

  @Field(() => [Number], { nullable: true })
  noradIds: number[];

  @Field(() => [String], { nullable: true })
  nationalities: string[];

  @Field(() => [String], { nullable: true })
  manufacturers: string[];

  @Field(() => Number, { nullable: true })
  massKg: number;

  @Field(() => Number, { nullable: true })
  massLbs: number;

  @Field(() => String, { nullable: true })
  orbit: string;

  @Field(() => String, { nullable: true })
  referenceSystem: string;

  @Field(() => String, { nullable: true })
  regime: string;

  @Field(() => Number, { nullable: true })
  longitude: number;

  @Field(() => Number, { nullable: true })
  semiMajorAxisKm: number;

  @Field(() => Number, { nullable: true })
  eccentricity: number;

  @Field(() => Number, { nullable: true })
  periapsisKm: number;

  @Field(() => Number, { nullable: true })
  apoapsisKm: number;

  @Field(() => Number, { nullable: true })
  inclinationDeg: number;

  @Field(() => Number, { nullable: true })
  periodMin: number;

  @Field(() => Number, { nullable: true })
  lifespanYears: number;

  @Field(() => String, { nullable: true })
  epoch: string;

  @Field(() => Number, { nullable: true })
  meanMotion: number;

  @Field(() => Number, { nullable: true })
  raan: number;

  @Field(() => Number, { nullable: true })
  argOfPericenter: number;

  @Field(() => Number, { nullable: true })
  meanAnomaly: number;

  @Field(() => String, { nullable: true })
  id: string;
}
