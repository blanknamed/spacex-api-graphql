import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ApiQueryRequest, UtilsService } from '@app/utils';

import { ApiService } from '../api/api.service';

import { LaunchPadQuery } from './models/LaunchPadQuery.model';
import * as LaunchPadUrls from './constants/urls';

@Injectable()
export class LaunchPadService {
  constructor(
    private readonly httpServicapiService: ApiService,
    private readonly utilsService: UtilsService,
  ) {}

  getAllLaunchPads() {
    return this.httpServicapiService
      .get(LaunchPadUrls.baseLaunchPadUrl)
      .pipe(map(this.utilsService.mapData));
  }

  getLaunchPadById(id: string) {
    return this.httpServicapiService
      .get(`${LaunchPadUrls.baseLaunchPadUrl}/${id}`)
      .pipe(map(this.utilsService.mapData));
  }

  getLaunchPadByQuery(page: number, limit: number, sort: string) {
    return this.httpServicapiService
      .post<LaunchPadQuery>(LaunchPadUrls.queryLaunchPadUrl, {
        options: {
          limit,
          page,
          sort,
        },
      } as ApiQueryRequest)
      .pipe(map(this.utilsService.mapData));
  }
}
