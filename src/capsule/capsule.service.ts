import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { ApiQueryRequest, UtilsService } from '@app/utils';

import * as CapsuleUrls from './constants/urls';
import { CapsuleQuery } from './models/CapsuleQuery.model';

@Injectable()
export class CapsuleService {
  constructor(
    private readonly httpService: HttpService,
    private readonly utilsService: UtilsService,
  ) {}

  getAllCapsules() {
    return this.httpService
      .get(CapsuleUrls.baseCapsuleUrl)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  getCapsuleById(id: string) {
    return this.httpService
      .get(`${CapsuleUrls.baseCapsuleUrl}/${id}`)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  getCapsuleByQuery(page: number, limit: number, sort: string) {
    return this.httpService
      .post<CapsuleQuery>(CapsuleUrls.queryCapsuleUrl, {
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
