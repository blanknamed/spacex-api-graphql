import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ApiQueryRequest, UtilsService } from '@app/utils';

import { ApiService } from '../api/api.service';

import * as DragonUrls from './constants/urls';
import { DragonQuery } from './models/DragonQuery.model';
@Injectable()
export class DragonService {
  constructor(
    private readonly apiService: ApiService,
    private readonly utilsService: UtilsService,
  ) {}

  getAllDragons() {
    return this.apiService
      .get(DragonUrls.baseDragonUrl)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  getDragonById(id: string) {
    return this.apiService
      .get(`${DragonUrls.baseDragonUrl}/${id}`)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  getDragonByQuery(page: number, limit: number, sort: string) {
    return this.apiService
      .post<DragonQuery>(DragonUrls.queryDragonUrl, {
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
