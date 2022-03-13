import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { UtilsService } from '@app/utils';
import { map } from 'rxjs';

@Injectable()
export class RoadsterService {
  constructor(
    private readonly httpService: HttpService,
    private readonly utilsService: UtilsService,
  ) {}

  getRoadsterInfo() {
    return this.httpService
      .get('/roadster')
      .pipe(
        map(this.utilsService.mapData),
        map(this.utilsService.camelCaseDataKeys),
      );
  }
}
