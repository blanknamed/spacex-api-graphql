import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import * as camelcaseKeys from 'camelcase-keys';

@Injectable()
export class UtilsService {
  mapData = (res: AxiosResponse<unknown>) => {
    return res.data;
  };

  camelCaseDataKeys = (data: Record<string, unknown>) => {
    return camelcaseKeys(data, { deep: true });
  };
}
