import { registerEnumType } from '@nestjs/graphql';

export enum LandingType {
  ASDS = 'ASDS',
  RTLS = 'RTLS',
  None = 'None',
  Ocean = 'Ocean',
}

registerEnumType(LandingType, {
  name: 'LandingType',
});
