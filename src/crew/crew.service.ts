import { Injectable } from '@nestjs/common';
import { ApiQueryRequest, UtilsService } from '@app/utils';
import { map } from 'rxjs';

import { ApiService } from '../api/api.service';

import * as CrewUrls from './constants/urls';
import { CrewQuery } from './models/CrewQuery.model';

@Injectable()
export class CrewService {
  constructor(
    private readonly apiService: ApiService,
    private readonly utilsService: UtilsService,
  ) {}

  getAllCrew() {
    return this.apiService
      .get(CrewUrls.baseCrewUrl)
      .pipe(map(this.utilsService.mapData));
  }

  getCrewById(id: string) {
    return this.apiService
      .get(`${CrewUrls.baseCrewUrl}/${id}`)
      .pipe(map(this.utilsService.mapData));
  }

  getCrewByQuery(page: number, limit: number, sort: string) {
    return this.apiService
      .post<CrewQuery>(CrewUrls.queryCrewUrl, {
        options: {
          limit,
          page,
          sort,
        },
      } as ApiQueryRequest)
      .pipe(map(this.utilsService.mapData));
  }
}
