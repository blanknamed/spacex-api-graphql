import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { ApiQueryRequest, UtilsService } from '@app/utils';

import { LaunchPadQuery } from './models/LaunchPadQuery.model';
import * as LaunchPadUrls from './constants/urls';

@Injectable()
export class LaunchPadService {
  constructor(
    private readonly httpService: HttpService,
    private readonly utilsService: UtilsService,
  ) {}

  getAllLaunchPads() {
    return this.httpService
      .get(LaunchPadUrls.baseLaunchPadUrl)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  getLaunchPadById(id: string) {
    return this.httpService
      .get(`${LaunchPadUrls.baseLaunchPadUrl}/${id}`)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  getLaunchPadByQuery(page: number, limit: number, sort: string) {
    return this.httpService
      .post<LaunchPadQuery>(LaunchPadUrls.queryLaunchPadUrl, {
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
