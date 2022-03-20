import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ApiService } from '@api/api.service';
import { ApiQueryRequest } from '@api/interfaces';

import * as DragonUrls from './constants/urls';
import { DragonQuery } from './models/DragonQuery.model';

@Injectable()
export class DragonService {
  constructor(private readonly apiService: ApiService) {}

  getAllDragons() {
    return this.apiService
      .get(DragonUrls.baseDragonUrl)
      .pipe(map((res) => res.data));
  }

  getDragonById(id: string) {
    return this.apiService
      .get(`${DragonUrls.baseDragonUrl}/${id}`)
      .pipe(map((res) => res.data));
  }

  getDragonByQuery(page: number, limit: number, sort: string) {
    return this.apiService
      .post<DragonQuery>(DragonUrls.queryDragonUrl, {
        options: {
          limit,
          page,
          sort,
        },
      } as ApiQueryRequest)
      .pipe(map((res) => res.data));
  }
}
