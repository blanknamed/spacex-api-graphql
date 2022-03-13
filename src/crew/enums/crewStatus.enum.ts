import { registerEnumType } from '@nestjs/graphql';

export enum CrewStatus {
  'active' = 'active',
  'inactive' = 'inactive',
  'retired' = 'retired',
  'unknown' = 'unknown',
}

registerEnumType(CrewStatus, {
  name: 'CrewStatus',
});
