import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ApiQueryRequest, UtilsService } from '@app/utils';
import { map } from 'rxjs';

import * as CrewUrls from './constants/urls';
import { CrewQuery } from './models/CrewQuery.model';

@Injectable()
export class CrewService {
  constructor(
    private readonly httpService: HttpService,
    private readonly utilsService: UtilsService,
  ) {}

  getAllCrew() {
    return this.httpService
      .get(CrewUrls.baseCrewUrl)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  getCrewById(id: string) {
    return this.httpService
      .get(`${CrewUrls.baseCrewUrl}/${id}`)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  getCrewByQuery(page: number, limit: number, sort: string) {
    return this.httpService
      .post<CrewQuery>(CrewUrls.queryCrewUrl, {
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
