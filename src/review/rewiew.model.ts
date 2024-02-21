import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MSchema } from 'mongoose';
import { ProductModel } from '../product/product.model';

export type ReviewDocument = HydratedDocument<ReviewModel>;

@Schema({ timestamps: true, versionKey: false })
export class ReviewModel {
	@Prop()
	name: string;

	@Prop()
	title: string;

	@Prop()
	description: string;

	@Prop()
	rating: number;

	@Prop({ type: MSchema.Types.ObjectId, ref: ProductModel.name })
	productId: MSchema.Types.ObjectId;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
