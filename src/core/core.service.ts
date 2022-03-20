import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ApiService } from '@app/api/api.service';
import { ApiQueryRequest } from '@app/api/interfaces';

import * as CoreUrls from './constants/urls';
import { Core } from './models/Core.model';
import { CoreQuery } from './models/CoreQuery.model';

@Injectable()
export class CoreService {
  constructor(private readonly apiService: ApiService) {}

  async getAllCores() {
    return this.apiService
      .get<Core[]>(CoreUrls.baseCoreUrl)
      .pipe(map((res) => res.data));
  }

  async getCoreById(id: string) {
    return this.apiService
      .get<Core>(`${CoreUrls.baseCoreUrl}/${id}`)
      .pipe(map((res) => res.data));
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
      .pipe(map((res) => res.data));
  }
}
