import { Injectable } from '@nestjs/common';
import { AuthorEntity } from '../../providers/database/entities/author.entity';
import { IAuthorFilter } from './interfaces/author-filter.interface';
import { AuthorModelService } from '../../providers/database/repository/author-model.service';
import {
  IPaginationOptions,
  IPaginationResponse,
} from '../../common/interfaces/pagination-options.interface';
import { SortDto } from '../../common/dto/sort-dto';

@Injectable()
export class AuthorService {
  constructor(private authorRepository: AuthorModelService) {}

  async findAll(
    filter: IAuthorFilter,
    sort: SortDto,
    pagination: IPaginationOptions,
  ): Promise<IPaginationResponse<AuthorEntity>> {
    return this.authorRepository.getByFilterSortAndPagination(
      filter,
      sort,
      pagination,
    );
  }

  async findOne(id: number): Promise<AuthorEntity | null> {
    return this.authorRepository.findOne({ where: { id } });
  }

  async create(authorData: AuthorEntity): Promise<AuthorEntity> {
    return this.authorRepository.save(authorData);
  }

  async update(id: number, authorData: AuthorEntity): Promise<boolean> {
    const result = await this.authorRepository.update(id, authorData);
    return !!result.affected;
  }

  async remove(id: number): Promise<void> {
    await this.authorRepository.delete(id);
  }
}
