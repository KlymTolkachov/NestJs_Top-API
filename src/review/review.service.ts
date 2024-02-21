import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReviewDocument, ReviewModel } from './rewiew.model';
import { Model, Types } from 'mongoose';
import { CreateReviewDto } from './dto/create.review.dto';

@Injectable()
export class ReviewService {
	constructor(@InjectModel(ReviewModel.name) private readonly reviewModel: Model<ReviewDocument>) {}

	async create(dto: CreateReviewDto): Promise<ReviewModel> {
		return await this.reviewModel.create(dto);
	}

	async delete(id: string): Promise<ReviewModel | null> {
		return await this.reviewModel.findByIdAndDelete(id).exec();
	}

	async findByProductId(productId: string): Promise<ReviewModel[]> {
		return await this.reviewModel.find({ productId }).exec();
	}

	async deleteByProductId(id: string) {
		return this.reviewModel.deleteMany({ productId: new Types.ObjectId(id) }).exec();
	}
}
