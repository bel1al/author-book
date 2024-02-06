import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AuthorEntity } from './author.entity';
import { TimeColumns } from './common.entity';

@Entity()
export class BookEntity extends TimeColumns {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => AuthorEntity, (author) => author.books)
  author: AuthorEntity;

  @Column()
  content: string;
}
