import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { HttpService } from '@nestjs/axios';

import { Launch } from './models/launch.model';

@Injectable()
export class LaunchService {
  constructor(private readonly httpService: HttpService) {}

  getNextLaunch() {
    return this.httpService
      .get<Launch>('/launches/next')
      .pipe(map((res) => res.data));
  }
}
