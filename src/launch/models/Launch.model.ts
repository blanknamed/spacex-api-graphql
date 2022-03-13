import { Field, ObjectType } from '@nestjs/graphql';

import { DatePrecisionEnum } from '../enums/datePrecisionEnum';

import { Core } from './Core.model';
import { LaunchLinks } from './Links.model';
import { Fairings } from './Fairings.model';

@ObjectType()
export class Launch {
  @Field(() => String)
  id: string;

  @Field(() => [Core], { nullable: true })
  cores?: Core[];

  @Field(() => Boolean, { nullable: true })
  upcoming?: boolean;

  @Field(() => DatePrecisionEnum, { nullable: true })
  datePrecision?: DatePrecisionEnum;

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

  // !TODO String | Launchpad
  @Field(() => String, { nullable: true })
  launchpad?: string;

  // !TODO String[] | Payload[]
  @Field(() => [String], { nullable: true })
  payloads?: string[];

  // !TODO String[] | Capsule[]
  @Field(() => [String], { nullable: true })
  capsules?: string[];

  // !TODO String[] | Ship[]
  @Field(() => [String], { nullable: true })
  ships?: string[];

  // !TODO String[] | Crew[]
  @Field(() => [String], { nullable: true })
  crew?: string[];

  // !TODO String[] | Failure[]
  @Field(() => [String], { nullable: true })
  failures?: string[];

  @Field(() => Boolean, { nullable: true })
  success?: boolean;

  // !TODO String | Rocket
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
