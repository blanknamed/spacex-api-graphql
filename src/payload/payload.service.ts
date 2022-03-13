import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { ApiQueryRequest, UtilsService } from '@app/utils';

import * as PayloadUrls from './constants/urls';
import { PayloadQuery } from './models/PayloadQuery.model';

@Injectable()
export class PayloadService {
  constructor(
    private readonly httpService: HttpService,
    private readonly utilsService: UtilsService,
  ) {}

  getAllPayloads() {
    return this.httpService
      .get(PayloadUrls.basePayloadUrl)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  getPayloadById(id: string) {
    return this.httpService
      .get(`${PayloadUrls.basePayloadUrl}/${id}`)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  getPayloadByQuery(page: number, limit: number, sort: string) {
    return this.httpService
      .post<PayloadQuery>(PayloadUrls.queryPayloadUrl, {
        options: {
          limit,
          page,
          sort,
        },
      } as ApiQueryRequest)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }
}
