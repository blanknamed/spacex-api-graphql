import { registerEnumType } from '@nestjs/graphql';

export enum LandPadStatus {
  'active' = 'active',
  'inactive' = 'inactive',
  'unknown' = 'unknown',
  'retired' = 'retired',
  'lost' = 'lost',
  'under_construction' = 'under construction',
}

registerEnumType(LandPadStatus, {
  name: 'LandPadStatus',
});
