import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Roadster {
  @Field(() => String)
  name: string;

  @Field(() => String)
  launchDateUtc: string;

  @Field(() => String)
  launchDateUnix: string;

  @Field(() => Number)
  launchMassKg: number;

  @Field(() => Number)
  launchMassLbs: number;

  @Field(() => Number)
  noradId: number;

  @Field(() => Number, { nullable: true })
  epochId?: number;

  @Field(() => String)
  orbitType: string;

  @Field(() => Number)
  apoapsisAu: number;

  @Field(() => Number)
  periapsisAu: number;

  @Field(() => Number)
  semiMajorAxisAu: number;

  @Field(() => Number)
  eccentricity: number;

  @Field(() => Number)
  inclination: number;

  @Field(() => Number)
  longitude: number;

  @Field(() => Number)
  periapsisArg: number;

  @Field(() => Number)
  periodDays: number;

  @Field(() => Number)
  speedKph: number;

  @Field(() => Number)
  earthDistanceKm: number;

  @Field(() => Number)
  earthDistanceMi: number;

  @Field(() => Number)
  marsDistanceMi: number;

  @Field(() => Number)
  marsDistanceKm: number;

  @Field(() => [String])
  flickrImages: string[];

  @Field(() => String)
  wikipedia: string;

  @Field(() => String)
  video: string;

  @Field(() => String)
  details: string;
}
