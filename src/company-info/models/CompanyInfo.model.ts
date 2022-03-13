import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import { Headquarters } from './Headquarters.model';
import { InfoLinks } from './InfoLinks.model';

@ObjectType()
export class CompanyInfo {
  @Field(() => Headquarters)
  headquarters: Headquarters;

  @Field(() => InfoLinks)
  links: InfoLinks;

  @Field(() => String)
  name: string;

  @Field(() => String)
  founder: string;

  @Field(() => Int)
  founded: number;

  @Field(() => Int)
  employees: number;

  @Field(() => Int)
  vehicles: number;

  @Field(() => String)
  ceo: string;

  @Field(() => String)
  cto: string;

  @Field(() => Int)
  launchSites: number;

  @Field(() => Int)
  testSites: number;

  @Field(() => Float)
  valuation: number;

  @Field(() => String)
  coo: string;

  @Field(() => String)
  ctoPropulsion: string;

  @Field(() => String)
  id: string;
}
