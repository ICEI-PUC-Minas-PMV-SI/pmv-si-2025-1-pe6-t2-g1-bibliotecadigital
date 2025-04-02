import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type ReviewDocument = Review & Document;

@Schema()
export class Review {
    @Prop({ type: Types.ObjectId, auto: true })
    id: Types.ObjectId;
    
    @Prop({ required: true, range: [1, 5] })
    rating: number;

    @Prop()
    comment: string;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    user: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Book', required: true })
    book: Types.ObjectId;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);