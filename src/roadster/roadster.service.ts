import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ApiService } from '@api/api.service';

@Injectable()
export class RoadsterService {
  constructor(private readonly apiService: ApiService) {}

  getRoadsterInfo() {
    return this.apiService.get('/roadster').pipe(map((res) => res.data));
  }
}
