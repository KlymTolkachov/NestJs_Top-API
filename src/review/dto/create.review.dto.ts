import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
	@IsString()
	name: string;

	@IsString()
	title: string;

	@IsString()
	description: string;

	@IsNumber()
	@Max(5)
	@Min(1, { message: 'invalid rating))' })
	rating: number;

	@IsString()
	productId: string;
}
