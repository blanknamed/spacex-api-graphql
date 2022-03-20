import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ApiQueryRequest } from '@app/api/interfaces';
import { ApiService } from '@app/api/api.service';

import * as PayloadUrls from './constants/urls';
import { PayloadQuery } from './models/PayloadQuery.model';

@Injectable()
export class PayloadService {
  constructor(private readonly apiService: ApiService) {}

  getAllPayloads() {
    return this.apiService
      .get(PayloadUrls.basePayloadUrl)
      .pipe(map((res) => res.data));
  }

  getPayloadById(id: string) {
    return this.apiService
      .get(`${PayloadUrls.basePayloadUrl}/${id}`)
      .pipe(map((res) => res.data));
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
      .pipe(map((res) => res.data));
  }
}
