import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { UtilsService } from '@app/utils';
import { map } from 'rxjs';

@Injectable()
export class CompanyInfoService {
  constructor(
    private readonly httpService: HttpService,
    private readonly utilsService: UtilsService,
  ) {}

  getCompanyInfo() {
    return this.httpService
      .get('/company')
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }
}
