import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ApiService } from '@app/api/api.service';
import { ApiQueryRequest } from '@app/api/interfaces';

import * as CapsuleUrls from './constants/urls';
import { CapsuleQuery } from './models/CapsuleQuery.model';

@Injectable()
export class CapsuleService {
  constructor(private readonly apiService: ApiService) {}

  getAllCapsules() {
    return this.apiService
      .get(CapsuleUrls.baseCapsuleUrl)
      .pipe(map((res) => res.data));
  }

  getCapsuleById(id: string) {
    return this.apiService
      .get(`${CapsuleUrls.baseCapsuleUrl}/${id}`)
      .pipe(map((res) => res.data));
  }

  getCapsuleByQuery(page: number, limit: number, sort: string) {
    return this.apiService
      .post<CapsuleQuery>(CapsuleUrls.queryCapsuleUrl, {
        options: {
          limit,
          page,
          sort,
        },
      } as ApiQueryRequest)
      .pipe(map((res) => res.data));
  }
}
