import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './config/database.config';
import { UsersModule } from './modules/users/users.module';
import { BooksModule } from './modules/books/books.module';
import { ReviewsModule } from './modules/reviews/review.module';
import { BookshelfItemModule } from './modules/bookshelf/bookshelf.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongoadmin:secret@localhost:27017'),
    /* ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('database.uri'),
        dbName: configService.get<string>('database.dbName'),
        authSource: 'admin',
        auth: {
          username: configService.get<string>('database.user'),
          password: configService.get<string>('database.password'),
        },
      }),
    }), */
    UsersModule,
    BooksModule,
    ReviewsModule,
    BookshelfItemModule,
  ],
})
export class AppModule {}
