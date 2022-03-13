import { registerEnumType } from '@nestjs/graphql';

export enum DatePrecisionEnum {
  hour = 'hour',
  day = 'day',
  month = 'month',
  year = 'year',
  'half' = 'half',
  'quarter' = 'quarter',
}

registerEnumType(DatePrecisionEnum, {
  name: 'DatePrecisionEnum',
});
