import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ApiService } from '@api/api.service';
import { ApiQueryRequest } from '@api/interfaces';

import * as CrewUrls from '../crew/constants/urls';

import * as LandPadUrls from './constants/urls';
import { LandpadQuery } from './models/LandPadQuery.model';

@Injectable()
export class LandPadService {
  constructor(private readonly apiService: ApiService) {}

  async getAllLandPads() {
    return this.apiService
      .get(LandPadUrls.baseLandPadUrl)
      .pipe(map((res) => res.data));
  }

  async getLandPadById(id: string) {
    return this.apiService
      .get(`${LandPadUrls.baseLandPadUrl}/${id}`)
      .pipe(map((res) => res.data));
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
      .pipe(map((res) => res.data));
  }
}
