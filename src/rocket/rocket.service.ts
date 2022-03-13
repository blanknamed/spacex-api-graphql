import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { UtilsService, ApiQueryRequest } from '@app/utils';

import { RocketQuery } from './models/RocketQuery.model';
import * as RocketUrls from './constants/urls';

@Injectable()
export class RocketService {
  constructor(
    private readonly httpService: HttpService,
    private readonly utilsService: UtilsService,
  ) {}

  async getAllRockets() {
    return this.httpService
      .get(RocketUrls.baseRocketUrl)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  async getRocketById(id: string) {
    return this.httpService
      .get(`${RocketUrls.baseRocketUrl}/${id}`)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  async getRocketByQuery(page: number, limit: number, sort: string) {
    return this.httpService
      .post<RocketQuery>(RocketUrls.queryRocketUrl, {
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
