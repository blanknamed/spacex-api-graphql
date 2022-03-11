import { Field, ObjectType } from '@nestjs/graphql';

import { Core } from './core.model';
import { LaunchLinks } from './links.model';
import { Fairings } from './fairings.model';

@ObjectType()
export class Launch {
  @Field(() => String)
  id: string;

  @Field(() => [Core], { nullable: true })
  cores?: Core[];

  @Field(() => Boolean, { nullable: true })
  upcoming?: boolean;

  // Union day|month|year
  @Field(() => String, { nullable: true })
  datePrecision?: string;

  @Field(() => String, { nullable: true })
  dateLocal?: string;

  @Field(() => String, { nullable: true })
  dateUnix?: string;

  @Field(() => String, { nullable: true })
  dateUtc?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Number, { nullable: true })
  flightNumber?: number;

  @Field(() => Boolean, { nullable: true })
  autoUpdate?: boolean;

  // String | Launchpad
  @Field(() => String, { nullable: true })
  launchpad?: string;

  // String[] | Payload[]
  @Field(() => [String], { nullable: true })
  payloads?: string[];

  // String[] | Capsule[]
  @Field(() => [String], { nullable: true })
  capsules?: string[];

  // String[] | Ship[]
  @Field(() => [String], { nullable: true })
  ships?: string[];

  // String[] | Crew[]
  @Field(() => [String], { nullable: true })
  crew?: string[];

  // String[] | Failure[]
  @Field(() => [String], { nullable: true })
  failures?: string[];

  @Field(() => Boolean, { nullable: true })
  success?: boolean;

  // String | Rocket
  @Field(() => String, { nullable: true })
  rocket?: string;

  @Field(() => Number, { nullable: true })
  window?: number;

  @Field(() => Boolean, { nullable: true })
  net?: boolean;

  @Field(() => Boolean, { nullable: true })
  tdb?: boolean;

  @Field(() => String, { nullable: true })
  staticFireDateUnix?: string;

  @Field(() => String, { nullable: true })
  staticFireDateUtc?: string;

  @Field(() => LaunchLinks, { nullable: true })
  links?: LaunchLinks;

  @Field(() => Fairings, { nullable: true })
  fairings?: Fairings;
}
