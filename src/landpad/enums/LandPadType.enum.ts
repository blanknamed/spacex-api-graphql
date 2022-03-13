import { registerEnumType } from '@nestjs/graphql';

export enum LandPadType {
  ASDS = 'ASDS',
  RTLS = 'RTLS',
}

registerEnumType(LandPadType, { name: 'LandPadType' });
