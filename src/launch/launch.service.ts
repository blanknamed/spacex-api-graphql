import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ApiService } from '@api/api.service';
import { ApiQueryRequest } from '@api/interfaces';

import * as LaunchUrls from './constants/urls';

import type { LaunchQuery } from './models/LaunchQuery.model';
import type { Launch } from './models/Launch.model';

@Injectable()
export class LaunchService {
  constructor(private readonly apiService: ApiService) {}

  getAllLaunches() {
    return this.apiService
      .get<Launch>(LaunchUrls.launchBaseUrl)
      .pipe(map((res) => res.data));
  }

  getLaunchById(id: string) {
    return this.apiService
      .get<Launch>(`${LaunchUrls.launchBaseUrl}/${id}`)
      .pipe(map((res) => res.data));
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
      .pipe(map((res) => res.data));
  }

  getLatestLaunch() {
    return this.apiService
      .get<Launch>(LaunchUrls.latestLaunch)
      .pipe(map((res) => res.data));
  }

  getNextLaunch() {
    return this.apiService
      .get<Launch>(LaunchUrls.nextLaunchUrl)
      .pipe(map((res) => res.data));
  }

  getPastLaunches() {
    return this.apiService
      .get<Launch[]>(LaunchUrls.pastLaunch)
      .pipe(map((res) => res.data));
  }

  getUpcomingLaunches() {
    return this.apiService
      .get<Launch[]>(LaunchUrls.upcomingLaunches)
      .pipe(map((res) => res.data));
  }
}
