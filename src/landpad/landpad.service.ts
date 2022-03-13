import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ApiQueryRequest, UtilsService } from '@app/utils';
import { map } from 'rxjs';

import * as CrewUrls from '../crew/constants/urls';

import * as LandPadUrls from './constants/urls';
import { LandpadQuery } from './models/LandPadQuery.model';

@Injectable()
export class LandPadService {
  constructor(
    private readonly httpService: HttpService,
    private readonly utilsService: UtilsService,
  ) {}

  async getAllLandPads() {
    return this.httpService
      .get(LandPadUrls.baseLandPadUrl)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  async getLandPadById(id: string) {
    return this.httpService
      .get(`${LandPadUrls.baseLandPadUrl}/${id}`)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  async getLandPadByQuery(page: number, limit: number, sort: string) {
    return this.httpService
      .post<LandpadQuery>(CrewUrls.queryCrewUrl, {
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
