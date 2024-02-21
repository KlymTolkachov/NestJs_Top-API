import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		return 'Hello World!';
	}

	getKlim(): string {
		return 'Hello Klim';
	}
}
