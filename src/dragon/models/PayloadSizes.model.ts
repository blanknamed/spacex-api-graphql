import { Field, ObjectType } from '@nestjs/graphql';
import { VolumeUnits } from '@interfaces';

@ObjectType()
export class CargoInfo {
  @Field(() => Number)
  solarArray: number;

  @Field(() => Boolean)
  unpressurizedCargo: boolean;
}

@ObjectType()
export class TrunkInfo {
  @Field(() => VolumeUnits)
  trunkVolume: VolumeUnits;

  @Field(() => CargoInfo, { nullable: true })
  cargo?: CargoInfo;
}
