import { ObjectId, Types } from "mongoose";
import { ReadStatus } from "./read.status.enum";
import { Prop, SchemaFactory } from "@nestjs/mongoose";

export type BookshelfItemDocument = BookshelfItem & Document;

export class BookshelfItem {
    @Prop({type: Types.ObjectId, auto: true })
    id: ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: string;

    @Prop({ type: Types.ObjectId, ref: 'Book', required: true })
    bookId: string;

    @Prop({ required: true, enum: ReadStatus })
    status: ReadStatus;
}

export const BookshelfItemSchema = SchemaFactory.createForClass(BookshelfItem);