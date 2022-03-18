import { Injectable } from '@nestjs/common';
import { UtilsService } from '@app/utils';
import { map } from 'rxjs';

import { ApiService } from '../api/api.service';

@Injectable()
export class RoadsterService {
  constructor(
    private readonly apiService: ApiService,
    private readonly utilsService: UtilsService,
  ) {}

  getRoadsterInfo() {
    return this.apiService
      .get('/roadster')
      .pipe(map(this.utilsService.mapData));
  }
}
