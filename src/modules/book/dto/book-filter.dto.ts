import { IsString, IsOptional, IsEmail } from 'class-validator';
import { IAuthorFilter } from '../interfaces/author-filter.interface';

export class AuthorFilterDto implements IAuthorFilter {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  surname?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;
}
