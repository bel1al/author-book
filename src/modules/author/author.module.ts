import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { ConfigModule } from '../../common/configuration/config.module';
import { AuthorModelService } from '../../providers/database/repository/author-model.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from '../../providers/database/entities/author.entity';
import { BookEntity } from '../../providers/database/entities/book.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([AuthorEntity, BookEntity])],
  controllers: [AuthorController],
  providers: [AuthorService, AuthorModelService],
})
export class AuthorModule {}
