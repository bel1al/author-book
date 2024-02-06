export interface IFilterOptions {
  [key: string]: any;
}

export interface ISortOptions {
  [key: string]: 'ASC' | 'DESC';
}

export interface IPaginationOptions {
  page: number;
  limit: number;
}

export interface IPaginationResponse<T> {
  total: number;
  result: T[];
}
