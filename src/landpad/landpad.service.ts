import { Injectable } from '@nestjs/common';
import { ApiQueryRequest, UtilsService } from '@app/utils';
import { map } from 'rxjs';

import * as CrewUrls from '../crew/constants/urls';
import { ApiService } from '../api/api.service';

import * as LandPadUrls from './constants/urls';
import { LandpadQuery } from './models/LandPadQuery.model';

@Injectable()
export class LandPadService {
  constructor(
    private readonly apiService: ApiService,
    private readonly utilsService: UtilsService,
  ) {}

  async getAllLandPads() {
    return this.apiService
      .get(LandPadUrls.baseLandPadUrl)
      .pipe(map(this.utilsService.mapData));
  }

  async getLandPadById(id: string) {
    return this.apiService
      .get(`${LandPadUrls.baseLandPadUrl}/${id}`)
      .pipe(map(this.utilsService.mapData));
  }

  async getLandPadByQuery(page: number, limit: number, sort: string) {
    return this.apiService
      .post<LandpadQuery>(CrewUrls.queryCrewUrl, {
        options: {
          limit,
          page,
          sort,
        },
      } as ApiQueryRequest)
      .pipe(map(this.utilsService.mapData));
  }
}
