import { registerEnumType } from '@nestjs/graphql';

export enum DragonType {
  'CargoDragon' = 'Dragon 1.0',
  'CargoDragon2' = 'Dragon 1.1',
  'CrewDragon' = 'Dragon 2.0',
}

registerEnumType(DragonType, {
  name: 'DragonTypeEnum',
});
