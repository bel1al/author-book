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

@Injectable()
export class AuthorModelService extends CommonService<AuthorEntity> {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorEntityRepository: Repository<AuthorEntity>,
  ) {
    super(authorEntityRepository);
  }

  async getByFilterSortAndPagination(
    filterDto: IFilterOptions,
    sortDto: SortDto,
    paginationOptions: IPaginationOptions,
  ): Promise<IPaginationResponse<AuthorEntity>> {
    const { page, limit } = paginationOptions;
    const skip = (page - 1) * limit;

    const query = this.authorEntityRepository.createQueryBuilder('author');

    for (const key in filterDto) {
      if (filterDto[key]) {
        query.andWhere(`author.${key} LIKE :${key}`, {
          [key]: `%${filterDto[key]}%`,
        });
      }
    }

    query.orderBy(`author.${sortDto.field}`, sortDto.order);

    query.skip(skip).take(limit);

    const result = await query.getMany();

    return { total: result.length, result };
  }
}
