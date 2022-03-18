import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { UtilsService, ApiQueryRequest } from '@app/utils';

import { ApiService } from '../api/api.service';

import * as CoreUrls from './constants/urls';
import { Core } from './models/Core.model';
import { CoreQuery } from './models/CoreQuery.model';

@Injectable()
export class CoreService {
  constructor(
    private readonly apiService: ApiService,
    private readonly utilsService: UtilsService,
  ) {}

  async getAllCores() {
    return this.apiService
      .get<Core[]>(CoreUrls.baseCoreUrl)
      .pipe(map(this.utilsService.mapData));
  }

  async getCoreById(id: string) {
    return this.apiService
      .get<Core>(`${CoreUrls.baseCoreUrl}/${id}`)
      .pipe(map(this.utilsService.mapData));
  }

  async getCoreQuery(page, limit, sort) {
    return this.apiService
      .post<CoreQuery>(CoreUrls.queryCoreUrl, {
        options: {
          limit,
          page,
          sort,
        },
      } as ApiQueryRequest)
      .pipe(map(this.utilsService.mapData));
  }
}
