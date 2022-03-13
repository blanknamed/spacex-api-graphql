import { registerEnumType } from '@nestjs/graphql';

export enum CapsuleStatus {
  unknown = 'unknown',
  active = 'active',
  retired = 'retired',
  destroyed = 'destroyed',
}

registerEnumType(CapsuleStatus, {
  name: 'CapsuleStatus',
});
