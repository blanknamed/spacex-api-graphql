import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class InfoLinks {
  @Field(() => String)
  website: string;

  @Field(() => String)
  flickr: string;

  @Field(() => String)
  twitter: string;

  @Field(() => String)
  elonTwitter: string;
}
