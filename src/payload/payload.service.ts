import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ApiQueryRequest, UtilsService } from '@app/utils';

import { ApiService } from '../api/api.service';

import * as PayloadUrls from './constants/urls';
import { PayloadQuery } from './models/PayloadQuery.model';

@Injectable()
export class PayloadService {
  constructor(
    private readonly apiService: ApiService,
    private readonly utilsService: UtilsService,
  ) {}

  getAllPayloads() {
    return this.apiService
      .get(PayloadUrls.basePayloadUrl)
      .pipe(map(this.utilsService.mapData));
  }

  getPayloadById(id: string) {
    return this.apiService
      .get(`${PayloadUrls.basePayloadUrl}/${id}`)
      .pipe(map(this.utilsService.mapData));
  }

  getPayloadByQuery(page: number, limit: number, sort: string) {
    return this.apiService
      .post<PayloadQuery>(PayloadUrls.queryPayloadUrl, {
        options: {
          limit,
          page,
          sort,
        },
      } as ApiQueryRequest)
      .pipe(map(this.utilsService.mapData));
  }
}
