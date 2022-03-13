import { registerEnumType } from '@nestjs/graphql';

export enum LandingType {
  ASDS = 'ASDS',
  RTLS = 'RTLS',
  None = 'NONE',
}

registerEnumType(LandingType, {
  name: 'LandingType',
});
