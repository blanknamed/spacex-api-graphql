import { registerEnumType } from '@nestjs/graphql';

export enum DatePrecisionEnum {
  hour = 'hour',
  day = 'day',
  month = 'month',
  year = 'year',
}

registerEnumType(DatePrecisionEnum, {
  name: 'DatePrecisionEnum',
});
