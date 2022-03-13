import { registerEnumType } from '@nestjs/graphql';

export enum LaunchPadStatus {
  'active' = 'active',
  'inactive' = 'inactive',
  'unknown' = 'unknown',
  'retired' = 'retired',
  'lost' = 'lost',
  'under_construction' = 'under construction',
}

registerEnumType(LaunchPadStatus, {
  name: 'LaunchPadStatus',
});
