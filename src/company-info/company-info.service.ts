import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { UtilsService } from '@app/utils';

import { ApiService } from '../api/api.service';

@Injectable()
export class CompanyInfoService {
  constructor(
    private readonly apiService: ApiService,
    private readonly utilsService: UtilsService,
  ) {}

  getCompanyInfo() {
    return this.apiService.get('/company').pipe(map(this.utilsService.mapData));
  }
}
