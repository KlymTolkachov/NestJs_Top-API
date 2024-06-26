import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRoot('mongodb://localhost/nest', {
			authSource: 'MONGO_AUTH_SOURCE=admin',
		}),
		AuthModule,
		TopPageModule,
		ProductModule,
		ReviewModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
