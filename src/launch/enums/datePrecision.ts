import { registerEnumType } from '@nestjs/graphql';

export enum DatePrecision {
  hour = 'hour',
  day = 'day',
  month = 'month',
  year = 'year',
  'half' = 'half',
  'quarter' = 'quarter',
}

registerEnumType(DatePrecision, {
  name: 'DatePrecision',
});
