import { IPaginationOptions } from '../interfaces/pagination-options.interface';
import { IsNotEmpty, IsString } from 'class-validator';

export class PaginationDto implements IPaginationOptions {
  @IsNotEmpty()
  @IsString()
  limit: number;

  @IsNotEmpty()
  @IsString()
  page: number;
}
