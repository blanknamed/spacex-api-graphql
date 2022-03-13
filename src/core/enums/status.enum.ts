import { registerEnumType } from '@nestjs/graphql';

export enum CoreStatus {
  'active' = 'active',
  'inactive' = 'inactive',
  'unknown' = 'unknown',
  'expended' = 'expended',
  'lost' = 'lost',
  'retired' = 'retired',
}

registerEnumType(CoreStatus, {
  name: 'CoreStatus',
});
