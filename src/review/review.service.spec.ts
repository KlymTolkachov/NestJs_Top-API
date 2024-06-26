import { Test, TestingModule } from '@nestjs/testing';
import { Types } from 'mongoose';
import { ReviewService } from './review.service';
import { getModelToken } from '@nestjs/mongoose';

describe('ReviewService', () => {
	let service: ReviewService;

	const exec = { exec: jest.fn() };
	const reviewRepositoryFactory = () => ({
		find: () => exec,
	});

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				ReviewService,
				{ useFactory: reviewRepositoryFactory, provide: getModelToken('ReviewModel') },
			],
		}).compile();
		//module.get<ReviewService>(ReviewService);
		service = module.get(ReviewService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('findByProductId working', async () => {
		const id = new Types.ObjectId().toHexString();
		reviewRepositoryFactory()
			.find()
			.exec.mockReturnValueOnce([{ productId: id }]);
		const res = await service.findByProductId(id);
		expect(res[0].productId).toBe(id);
	});
});
