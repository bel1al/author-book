import { CommonService } from './common.service';
import { AuthorEntity } from '../entities/author.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IFilterOptions } from '../../../common/interfaces/filter-options.interface';
import {
  IPaginationOptions,
  IPaginationResponse,
} from '../../../common/interfaces/pagination-options.interface';
import { SortDto } from '../../../common/dto/sort-dto';
import { BookEntity } from '../entities/book.entity';

@Injectable()
export class BookModelService extends CommonService<BookEntity> {
  constructor(
    @InjectRepository(BookEntity)
    private readonly authorEntityRepository: Repository<BookEntity>,
  ) {
    super(authorEntityRepository);
  }

  async getByFilterSortAndPagination(
    filterDto: IFilterOptions,
    sortDto: SortDto,
    paginationOptions: IPaginationOptions,
  ): Promise<IPaginationResponse<BookEntity>> {
    const { page, limit } = paginationOptions;
    const skip = (page - 1) * limit;

    const query = this.authorEntityRepository.createQueryBuilder('book');

    for (const key in filterDto) {
      if (filterDto[key]) {
        query.andWhere(`book.${key} LIKE :${key}`, {
          [key]: `%${filterDto[key]}%`,
        });
      }
    }

    query.orderBy(`book.${sortDto.field}`, sortDto.order);

    query.skip(skip).take(limit);

    const result = await query.getMany();

    return { total: result.length, result };
  }
}
