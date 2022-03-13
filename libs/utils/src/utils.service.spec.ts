import { Test, TestingModule } from '@nestjs/testing';
import { AxiosResponse } from 'axios';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilsService],
    }).compile();

    service = module.get<UtilsService>(UtilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should map return data from response', () => {
    const testData = ['test1', 'test2', 'test3'];

    const axiosResponse: AxiosResponse = {
      data: testData,
      status: 200,
      headers: {},
      statusText: '',
      config: {},
    };

    expect(service.mapData(axiosResponse)).toEqual(testData);
  });

  it('should format keys of object to camelCase', () => {
    // eslint-disable-next-line camelcase
    const responseEntity = { not_a_camel_case_key: '', camelCaseKey: '' };

    const mappedEntity = service.camelCaseDataKeys(responseEntity);

    expect(mappedEntity).toEqual({ notACamelCaseKey: '', camelCaseKey: '' });
  });
});
