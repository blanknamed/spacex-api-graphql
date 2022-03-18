import axios from 'axios';
import { Module } from '@nestjs/common';

import { ApiService } from './api.service';

export const AXIOS_INSTANCE_TOKEN = 'AXIOS_INSTANCE_TOKEN';

const apiProviders = [
  ApiService,
  {
    provide: AXIOS_INSTANCE_TOKEN,
    useValue: axios,
  },
];

@Module({
  providers: apiProviders,
  exports: apiProviders,
})
export class ApiModule {}
