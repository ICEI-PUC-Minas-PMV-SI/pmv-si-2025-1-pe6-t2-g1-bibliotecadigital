import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Document, ObjectId, Types } from 'mongoose';
import { BookCondition } from './book.condition.enum';

export type BookDocument = Book & Document;

@Schema({ timestamps: true })
export class Book {
  @Prop({type: Types.ObjectId, auto: true })
  id: ObjectId;

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

  @Prop({ required: true, enum: BookCondition })
  condition: BookCondition;

  @Prop({ type: { type: Types.ObjectId, ref: 'Owner', required: true } })
  owner?: Types.ObjectId;

  @Prop([{ type: Types.ObjectId, ref: 'User' }])
  interestedUsers: Types.ObjectId[];

  @Prop([{ type: Types.ObjectId, ref: 'Review' }])
  reviews: Types.ObjectId[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
