import { IsString, IsOptional } from 'class-validator';
import { IBookFilter } from '../interfaces/book-filter.interface';

export class BookFilterDto implements IBookFilter {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  content?: string;
}
