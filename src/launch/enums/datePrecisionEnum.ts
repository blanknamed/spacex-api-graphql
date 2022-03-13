import { registerEnumType } from '@nestjs/graphql';

export enum DatePrecisionEnum {
  DAY = 'day',
  MONTH = 'month',
  YEAR = 'year',
}

registerEnumType(DatePrecisionEnum, {
  name: 'DatePrecisionEnum',
});
