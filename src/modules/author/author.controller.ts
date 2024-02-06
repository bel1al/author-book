import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorEntity } from '../../providers/database/entities/author.entity';
import { AuthorFilterDto } from './dto/author-filter.dto';
import { SortDto } from '../../common/dto/sort-dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { IPaginationResponse } from '../../common/interfaces/pagination-options.interface';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  async findAll(
    @Query() filterDto: AuthorFilterDto,
    @Query() sortDto: SortDto,
    @Query() paginationDto: PaginationDto,
  ): Promise<Promise<IPaginationResponse<AuthorEntity>>> {
    return this.authorService.findAll(filterDto, sortDto, paginationDto);
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<AuthorEntity | null> {
    return this.authorService.findOne(id);
  }

  @Post()
  async create(@Body() author: AuthorEntity): Promise<AuthorEntity> {
    return this.authorService.create(author);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() author: AuthorEntity,
  ): Promise<boolean> {
    return this.authorService.update(+id, author);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.authorService.remove(+id);
  }
}
