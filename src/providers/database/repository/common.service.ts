import {
  Repository,
  DeepPartial,
  EntityManager,
  SelectQueryBuilder,
} from 'typeorm';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';

export class CommonService<T> {
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

  public async findManyWithQueryBuilder(
    findManyOptions: FindManyOptions<T>,
  ): Promise<T[]> {
    return this.repo.find(findManyOptions);
  }
}
