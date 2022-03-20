import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ApiService } from '@api/api.service';
import { ApiQueryRequest } from '@api/interfaces';

import * as CrewUrls from './constants/urls';
import { CrewQuery } from './models/CrewQuery.model';

@Injectable()
export class CrewService {
  constructor(private readonly apiService: ApiService) {}

  getAllCrew() {
    return this.apiService
      .get(CrewUrls.baseCrewUrl)
      .pipe(map((res) => res.data));
  }

  getCrewById(id: string) {
    return this.apiService
      .get(`${CrewUrls.baseCrewUrl}/${id}`)
      .pipe(map((res) => res.data));
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
      .pipe(map((res) => res.data));
  }
}
