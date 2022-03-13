import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class PatchLinks {
  @Field(() => String, { nullable: true })
  small?: string;

  @Field(() => String, { nullable: true })
  large?: string;
}

@ObjectType()
class RedditLinks {
  @Field(() => String, { nullable: true })
  campaign?: string;

  @Field(() => String, { nullable: true })
  launch?: string;

  @Field(() => String, { nullable: true })
  media?: string;

  @Field(() => String, { nullable: true })
  recovery?: string;
}

@ObjectType()
class FlickrLinks {
  @Field(() => [String])
  small: string[];

  @Field(() => [String])
  original: string[];
}

@ObjectType()
export class LaunchLinks {
  @Field(() => PatchLinks, { nullable: true })
  patch?: PatchLinks;

  @Field(() => RedditLinks, { nullable: true })
  reddit?: RedditLinks;

  @Field(() => FlickrLinks, { nullable: true })
  flickr?: FlickrLinks;

  @Field(() => String, { nullable: true })
  presskit?: string;

  @Field(() => String, { nullable: true })
  webcast?: string;

  @Field(() => String, { nullable: true })
  youtubeId?: string;

  @Field(() => String, { nullable: true })
  article?: string;

  @Field(() => String, { nullable: true })
  wikipedia?: string;
}
