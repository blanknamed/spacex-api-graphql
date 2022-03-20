export interface ApiQueryRequest {
  options: {
    sort: string;
    offset: number;
    page: number;
    limit: number;
    pagination?: boolean;
  };
}
