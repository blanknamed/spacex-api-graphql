import { registerEnumType } from '@nestjs/graphql';

// Noinspection JSUnusedGlobalSymbols
export enum LandingType {
  ASDS = 'ASDS',
  RTLS = 'RTLS',
  None = 'NONE',
}

registerEnumType(LandingType, {
  name: 'LandingType',
});
