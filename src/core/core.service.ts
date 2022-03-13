import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { UtilsService } from '@app/utils';

import { ApiQueryRequest } from '../launch/types/apiQuery';

import * as CoreUrls from './constants/urls';
import { Core } from './models/Core.model';
import { CoreQuery } from './models/CoreQuery.model';

@Injectable()
export class CoreService {
  constructor(
    private readonly httpService: HttpService,
    private readonly utilsService: UtilsService,
  ) {}

  async getAllCores() {
    return this.httpService
      .get<Core[]>(CoreUrls.baseCoreUrl)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  async getCoreById(id: string) {
    return this.httpService
      .get<Core>(`${CoreUrls.baseCoreUrl}/${id}`)
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }

  async getCoreQuery(page, limit, sort) {
    return this.httpService
      .post<CoreQuery>(CoreUrls.queryCoreUrl, {
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
