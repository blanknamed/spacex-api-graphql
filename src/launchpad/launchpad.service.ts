import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ApiService } from '@api/api.service';
import { ApiQueryRequest } from '@api/interfaces';

import { LaunchPadQuery } from './models/LaunchPadQuery.model';
import * as LaunchPadUrls from './constants/urls';

@Injectable()
export class LaunchPadService {
  constructor(private readonly apiService: ApiService) {}

  getAllLaunchPads() {
    return this.apiService
      .get(LaunchPadUrls.baseLaunchPadUrl)
      .pipe(map((res) => res.data));
  }

  getLaunchPadById(id: string) {
    return this.apiService
      .get(`${LaunchPadUrls.baseLaunchPadUrl}/${id}`)
      .pipe(map((res) => res.data));
  }

  getLaunchPadByQuery(page: number, limit: number, sort: string) {
    return this.apiService
      .post<LaunchPadQuery>(LaunchPadUrls.queryLaunchPadUrl, {
        options: {
          limit,
          page,
          sort,
        },
      } as ApiQueryRequest)
      .pipe(map((res) => res.data));
  }
}
