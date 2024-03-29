import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { ConfigModule } from '../../common/configuration/config.module';
import { BookModelService } from '../../providers/database/repository/book-model.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from '../../providers/database/entities/author.entity';
import { BookEntity } from '../../providers/database/entities/book.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([AuthorEntity, BookEntity])],
  controllers: [BookController],
  providers: [BookService, BookModelService],
})
export class BookModule {}
