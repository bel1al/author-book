export interface IPaginationOptions {
  page: number;
  limit: number;
}

export interface IPaginationResponse<T> {
  total: number;
  result: T[];
}
