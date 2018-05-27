import { Get, Controller } from '@nestjs/common';
import { AppService } from '../app.service';
import { Product } from 'class/Product';

@Controller('products')
export class ProductController {
	constructor(private readonly appService: AppService) {}

	@Get()
	findAll(): Product[] {
		return this.appService.getProducts();
	}
}