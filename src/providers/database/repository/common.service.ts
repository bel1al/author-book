import {
  Repository,
  DeepPartial,
  EntityManager,
  SelectQueryBuilder,
  UpdateResult,
  DeleteResult,
  ObjectLiteral,
} from 'typeorm';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { ObjectId } from 'typeorm/driver/mongodb/typings';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';

export class CommonService<T extends ObjectLiteral> {
  private repo: Repository<T>;

  constructor(repo: Repository<T>) {
    this.repo = repo;
  }

  getRepo() {
    return this.repo;
  }

  getManager(): EntityManager {
    return this.repo.manager;
  }

  public createQueryBuilder(alias?: string): SelectQueryBuilder<T> {
    return this.repo.createQueryBuilder(alias);
  }

  public async createOid(entity: DeepPartial<T>): Promise<T> {
    return this.repo.save(entity);
  }

  public async createDefault(entity: DeepPartial<T>): Promise<T> {
    return this.repo.save(entity);
  }

  public async save(entity: DeepPartial<T>): Promise<T> {
    return this.repo.save(entity);
  }

  public async update(
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectId
      | ObjectId[]
      | FindOptionsWhere<T>,
    partialEntity: QueryDeepPartialEntity<T>,
  ): Promise<UpdateResult> {
    return this.repo.update(criteria, partialEntity);
  }

  public async findManyWithQueryBuilder(
    findManyOptions: FindManyOptions<T>,
  ): Promise<T[]> {
    return this.repo.find(findManyOptions);
  }

  public async delete(
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectId
      | ObjectId[]
      | FindOptionsWhere<T>,
  ): Promise<DeleteResult> {
    return this.repo.delete(criteria);
  }

  findOne(options: FindOneOptions<T>): Promise<T | null> {
    return this.repo.findOne(options);
  }
}
