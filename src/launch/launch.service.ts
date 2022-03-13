import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { UtilsService } from '@app/utils';

import { Launch } from './models/Launch.model';
import * as LaunchUrls from './constants/urls';
import { LaunchQuery } from './models/LaunchQuery.model';

import type { ApiQueryRequest } from './types/apiQuery';

@Injectable()
export class LaunchService {
  constructor(
    private readonly httpService: HttpService,
    private readonly utilsService: UtilsService,
  ) {}

  getNextLaunch() {
    return this.httpService
      .get<Launch>(LaunchUrls.nextLaunchUrl)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  getLaunchById(id: string) {
    return this.httpService
      .get<Launch>(`${LaunchUrls.launchBaseUrl}/${id}`)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  getPaginatedLaunch(page, limit, sort) {
    return this.httpService
      .post<LaunchQuery>(LaunchUrls.queryLaunchUrl, {
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

  // GetLaunchByName(name: string) {
  //   return this.httpService
  //     .get<Launch>(`${LaunchUrls.launchBaseUrl}/${id}`)
  //     .pipe(
  //       map(this.utilsService.mapData),
  //       map(this.utilsService.camelCaseDataKeys),
  //     );
  // }
}
