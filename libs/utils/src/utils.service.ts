import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import * as camelcaseKeys from 'camelcase-keys';

@Injectable()
export class UtilsService {
  mapData = (res: AxiosResponse<unknown>) => {
    return res.data;
  };

  camelCaseDataKeys = <T extends Record<string, unknown>>(data: T): T => {
    return camelcaseKeys(data, { deep: true }) as T;
  };
}
