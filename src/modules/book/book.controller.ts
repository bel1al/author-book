// src/book/book.controller.ts
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
import { BookService } from './book.service';
import { BookEntity } from '../../providers/database/entities/book.entity';
import { IPaginationResponse } from '../../common/interfaces/pagination-options.interface';
import { AuthorFilterDto } from '../author/dto/author-filter.dto';
import { SortDto } from '../../common/dto/sort-dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { BookFilterDto } from './dto/book-filter.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll(
    @Query() filterDto: BookFilterDto,
    @Query() sortDto: SortDto,
    @Query() paginationDto: PaginationDto,
  ): Promise<Promise<IPaginationResponse<BookEntity>>> {
    return this.bookService.findAll(filterDto, sortDto, paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<BookEntity | null> {
    return this.bookService.findOne(id);
  }

  @Post()
  async create(@Body() book: BookEntity): Promise<BookEntity> {
    return this.bookService.create(book);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() book: BookEntity,
  ): Promise<boolean> {
    return this.bookService.update(+id, book);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.bookService.remove(+id);
  }
}
