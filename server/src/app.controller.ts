import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from 'class/Product';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}
}
