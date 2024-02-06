import { Module } from '@nestjs/common';
import { AuthorModule } from './modules/author/author.module';
import { BookModule } from './modules/book/book.module';
import { ConfigModule } from './common/configuration/config.module';
import { DatabaseModule } from './providers/database/database.module';

@Module({
  imports: [AuthorModule, BookModule, ConfigModule, DatabaseModule],
})
export class AppModule {}
