import { Injectable } from '@nestjs/common';
import { BookEntity } from '../../providers/database/entities/book.entity';
import { BookModelService } from '../../providers/database/repository/book-model.service';
import { SortDto } from '../../common/dto/sort-dto';
import {
  IPaginationOptions,
  IPaginationResponse,
} from '../../common/interfaces/pagination-options.interface';
import { IBookFilter } from './interfaces/book-filter.interface';

@Injectable()
export class BookService {
  constructor(private bookModelService: BookModelService) {}

  async findAll(
    filter: IBookFilter,
    sort: SortDto,
    pagination: IPaginationOptions,
  ): Promise<IPaginationResponse<BookEntity>> {
    return this.bookModelService.getByFilterSortAndPagination(
      filter,
      sort,
      pagination,
    );
  }
  async findOne(id: number): Promise<BookEntity | null> {
    return this.bookModelService.findOne({ where: { id } });
  }

  async create(bookData: BookEntity): Promise<BookEntity> {
    return this.bookModelService.save(bookData);
  }

  async update(id: number, bookData: BookEntity): Promise<boolean> {
    const result = await this.bookModelService.update(id, bookData);
    return !!result.affected;
  }

  async remove(id: number): Promise<void> {
    await this.bookModelService.delete(id);
  }
}
