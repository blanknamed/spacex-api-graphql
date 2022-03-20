import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import * as camelcaseKeys from 'camelcase-keys';

import type { AxiosStatic } from 'axios';

@Injectable()
export class ApiService extends HttpService {
  constructor(@Inject('AXIOS_INSTANCE_TOKEN') axios: AxiosStatic) {
    const instance = axios.create({
      baseURL: process.env.SPACEXAPI_URL,
    });

    instance.interceptors.response.use((axiosResponse) => {
      const nextResponse = { ...axiosResponse };

      nextResponse.data = camelcaseKeys(nextResponse.data, { deep: true });

      return nextResponse;
    });

    super(instance);
  }
}
