import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ApiQueryRequest, UtilsService } from '@app/utils';

import { ApiService } from '../api/api.service';

import * as CapsuleUrls from './constants/urls';
import { CapsuleQuery } from './models/CapsuleQuery.model';

@Injectable()
export class CapsuleService {
  constructor(
    private readonly apiService: ApiService,
    private readonly utilsService: UtilsService,
  ) {}

  getAllCapsules() {
    return this.apiService
      .get(CapsuleUrls.baseCapsuleUrl)
      .pipe(map(this.utilsService.mapData));
  }

  getCapsuleById(id: string) {
    return this.apiService
      .get(`${CapsuleUrls.baseCapsuleUrl}/${id}`)
      .pipe(map(this.utilsService.mapData));
  }

  getCapsuleByQuery(page: number, limit: number, sort: string) {
    return this.apiService
      .post<CapsuleQuery>(CapsuleUrls.queryCapsuleUrl, {
        options: {
          limit,
          page,
          sort,
        },
      } as ApiQueryRequest)
      .pipe(map(this.utilsService.mapData));
  }
}
