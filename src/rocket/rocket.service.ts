import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { UtilsService, ApiQueryRequest } from '@app/utils';

import { ApiService } from '../api/api.service';

import { RocketQuery } from './models/RocketQuery.model';
import * as RocketUrls from './constants/urls';

@Injectable()
export class RocketService {
  constructor(
    private readonly apiService: ApiService,
    private readonly utilsService: UtilsService,
  ) {}

  async getAllRockets() {
    return this.apiService
      .get(RocketUrls.baseRocketUrl)
      .pipe(map(this.utilsService.mapData));
  }

  async getRocketById(id: string) {
    return this.apiService
      .get(`${RocketUrls.baseRocketUrl}/${id}`)
      .pipe(map(this.utilsService.mapData));
  }

  async getRocketByQuery(page: number, limit: number, sort: string) {
    return this.apiService
      .post<RocketQuery>(RocketUrls.queryRocketUrl, {
        options: {
          limit,
          page,
          sort,
        },
      } as ApiQueryRequest)
      .pipe(map(this.utilsService.mapData));
  }
}
