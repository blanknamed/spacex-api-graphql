import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { UtilsService } from '@app/utils';

import { ApiService } from '../api/api.service';

import * as LaunchUrls from './constants/urls';

import type { ApiQueryRequest } from '@app/utils';
import type { LaunchQuery } from './models/LaunchQuery.model';
import type { Launch } from './models/Launch.model';

@Injectable()
export class LaunchService {
  constructor(
    private readonly apiService: ApiService,
    private readonly utilsService: UtilsService,
  ) {}

  getAllLaunches() {
    return this.apiService
      .get<Launch>(LaunchUrls.launchBaseUrl)
      .pipe(map(this.utilsService.mapData));
  }

  getLaunchById(id: string) {
    return this.apiService
      .get<Launch>(`${LaunchUrls.launchBaseUrl}/${id}`)
      .pipe(map(this.utilsService.mapData));
  }

  async getLaunchQuery(page: number, limit: number, sort: string) {
    return this.apiService
      .post<LaunchQuery>(LaunchUrls.queryLaunchUrl, {
        options: {
          limit,
          page,
          sort,
        },
      } as ApiQueryRequest)
      .pipe(map(this.utilsService.mapData));
  }

  getLatestLaunch() {
    return this.apiService
      .get<Launch>(LaunchUrls.latestLaunch)
      .pipe(map(this.utilsService.mapData));
  }

  getNextLaunch() {
    return this.apiService
      .get<Launch>(LaunchUrls.nextLaunchUrl)
      .pipe(map(this.utilsService.mapData));
  }

  getPastLaunches() {
    return this.apiService
      .get<Launch[]>(LaunchUrls.pastLaunch)
      .pipe(map(this.utilsService.mapData));
  }

  getUpcomingLaunches() {
    return this.apiService
      .get<Launch[]>(LaunchUrls.upcomingLaunches)
      .pipe(map(this.utilsService.mapData));
  }
}
