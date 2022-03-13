import { Field, ObjectType, Int } from '@nestjs/graphql';

import { DatePrecision } from '../enums/datePrecision';

import { LaunchLinks } from './Links.model';
import { Fairings } from './Fairings.model';
import { LaunchCore } from './LaunchCore.model';
import { Failure } from './Failure.model';

@ObjectType()
export class Launch {
  @Field(() => String)
  id: string;

  @Field(() => [LaunchCore], { nullable: 'items' })
  cores?: LaunchCore[];

  @Field(() => Boolean, { nullable: true })
  upcoming?: boolean;

  @Field(() => DatePrecision, { nullable: true })
  datePrecision?: DatePrecision;

  @Field(() => String, { nullable: true })
  dateLocal?: string;

  @Field(() => String, { nullable: true })
  dateUnix?: string;

  @Field(() => String, { nullable: true })
  dateUtc?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  flightNumber?: number;

  @Field(() => Boolean, { nullable: true })
  autoUpdate?: boolean;

  @Field(() => String, { nullable: true })
  launchpad?: string;

  @Field(() => [String], { nullable: 'items' })
  payloads?: string[];

  @Field(() => [String], { nullable: 'items' })
  capsules?: string[];

  @Field(() => [String], { nullable: 'items' })
  ships?: string[];

  @Field(() => [String], { nullable: 'items' })
  crew?: string[];

  @Field(() => [Failure], { nullable: 'items' })
  failures?: Failure[];

  @Field(() => Boolean, { nullable: true })
  success?: boolean;

  @Field(() => String, { nullable: true })
  rocket?: string;

  @Field(() => Int, { nullable: true })
  window?: number;

  @Field(() => Boolean, { nullable: true })
  net?: boolean;

  @Field(() => Boolean, { nullable: true })
  tbd?: boolean;

  @Field(() => String, { nullable: true })
  staticFireDateUnix?: string;

  @Field(() => String, { nullable: true })
  staticFireDateUtc?: string;

  @Field(() => LaunchLinks, { nullable: true })
  links?: LaunchLinks;

  @Field(() => Fairings, { nullable: true })
  fairings?: Fairings;

  @Field(() => String, { nullable: true })
  details?: string;
}
