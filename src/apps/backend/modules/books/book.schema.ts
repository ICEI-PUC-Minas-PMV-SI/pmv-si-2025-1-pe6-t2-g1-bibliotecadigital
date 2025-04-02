import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Document, ObjectId } from 'mongoose';
import { User } from '../users/user.schema';

export type BookDocument = Book & Document;

@Schema({ timestamps: true })
export class Book {
  _id: ObjectId;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  title: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  author: string;

  coverUrl?: string;

  description?: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  edition: string;

  @Prop({ required: true })
  @IsNumber()
  publishYear: number;

  genre: string;

  @Prop({ required: true })
  ownerId: ObjectId;
  owner?: User;

  createdAt: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
