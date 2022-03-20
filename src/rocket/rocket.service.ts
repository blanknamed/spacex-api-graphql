import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ApiService } from '@api/api.service';
import { ApiQueryRequest } from '@api/interfaces';

import { RocketQuery } from './models/RocketQuery.model';
import * as RocketUrls from './constants/urls';

@Injectable()
export class RocketService {
  constructor(private readonly apiService: ApiService) {}

  async getAllRockets() {
    return this.apiService
      .get(RocketUrls.baseRocketUrl)
      .pipe(map((res) => res.data));
  }

  async getRocketById(id: string) {
    return this.apiService
      .get(`${RocketUrls.baseRocketUrl}/${id}`)
      .pipe(map((res) => res.data));
  }

  async getRocketByQuery(page: number, limit: number, sort: string) {
    return this.apiService
      .post<RocketQuery>(RocketUrls.queryRocketUrl, {
        options: {
          limit,
          page,
          sort,
        },
      } as ApiQueryRequest)
      .pipe(map((res) => res.data));
  }
}
