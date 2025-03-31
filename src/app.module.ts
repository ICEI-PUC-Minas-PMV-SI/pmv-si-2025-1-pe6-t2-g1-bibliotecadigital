import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './config/database.config';
import { UsersModule } from './modules/users/users.module';
import { BooksModule } from './modules/books/books.module';

@Module({
  imports: [
    UsersModule,
    BooksModule,
    ConfigModule.forRoot({
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
    }),
  ],
})
export class AppModule {}
