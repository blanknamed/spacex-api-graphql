import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class PatchLinks {
  @Field(() => String)
  small: string;

  @Field(() => String)
  large: string;
}

@ObjectType()
class RedditLinks {
  @Field(() => String)
  campaign: string;

  @Field(() => String)
  launch: string;

  @Field(() => String)
  media: string;

  @Field(() => String)
  recovery: string;
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
  @Field(() => PatchLinks)
  patch: PatchLinks;

  @Field(() => RedditLinks)
  reddit: RedditLinks;

  @Field(() => FlickrLinks)
  flickr: FlickrLinks;

  @Field(() => String)
  presskit: string;

  @Field(() => String)
  webcast: string;

  @Field(() => String)
  youtubeId: string;

  @Field(() => String)
  article: string;

  @Field(() => String)
  wikipedia: string;
}
