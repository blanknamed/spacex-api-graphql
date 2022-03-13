import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ApiQueryRequest, UtilsService } from '@app/utils';

import { Launch } from './models/Launch.model';
import * as LaunchUrls from './constants/urls';
import { LaunchQuery } from './models/LaunchQuery.model';

@Injectable()
export class LaunchService {
  constructor(
    private readonly httpService: HttpService,
    private readonly utilsService: UtilsService,
  ) {}

  getAllLaunches() {
    return this.httpService
      .get<Launch>(LaunchUrls.launchBaseUrl)
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

  getLaunchQuery(page: number, limit: number, sort: string) {
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

  getLatestLaunch() {
    return this.httpService
      .get<Launch>(LaunchUrls.latestLaunch)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  getNextLaunch() {
    return this.httpService
      .get<Launch>(LaunchUrls.nextLaunchUrl)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  getPastLaunches() {
    return this.httpService
      .get<Launch[]>(LaunchUrls.pastLaunch)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  getUpcomingLaunches() {
    return this.httpService
      .get<Launch[]>(LaunchUrls.upcomingLaunches)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }
}
