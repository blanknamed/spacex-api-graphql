import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ApiService } from '@api/api.service';

@Injectable()
export class CompanyInfoService {
  constructor(private readonly apiService: ApiService) {}

  getCompanyInfo() {
    return this.apiService.get('/company').pipe(map((res) => res.data));
  }
}
