import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { disconnect } from 'mongoose';
import { AuthDto } from '../src/auth/dto/auth.dto';

const loginDto: AuthDto = {
	login: 'gift.wdd@gmail.com',
	password: '123446u744',
};

describe('AuthController (e2e)', () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/auth/login (POST) - success', async () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send(loginDto)
			.expect(200)
			.then(({ body }: request.Response) => {
				expect(body.accessToken).toBeDefined();
			});
	});

	it('/auth/login (POST) - failed password', () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send({ ...loginDto, password: '33' })
			.expect(401, {
				message: 'Invalid Password',
				error: 'Unauthorized',
				statusCode: 401,
			});
	});

	it('/auth/login (POST) - failed login', () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send({ ...loginDto, login: 'ggg@dkn.com' })
			.expect(401, {
				message: 'User with this email not found',
				error: 'Unauthorized',
				statusCode: 401,
			});
	});

	afterAll(() => {
		disconnect();
	});
});
