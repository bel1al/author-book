import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BookEntity } from './book.entity';
import { TimeColumns } from './common.entity';

@Entity()
export class AuthorEntity extends TimeColumns {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @OneToMany(() => BookEntity, (book) => book.author)
  books: BookEntity[];
}
