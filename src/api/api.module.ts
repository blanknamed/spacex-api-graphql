import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({ baseURL: 'https://api.spacexdata.com/v4' })],
})
export class ApiModule {}
