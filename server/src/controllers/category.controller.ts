import { Get, Controller } from '@nestjs/common';
import { AppService } from '../app.service';
import { Category } from 'class/Category';

@Controller('category')
export class CategoryController {
	constructor(private readonly appService: AppService) {}

	@Get()
	findAll(): Category[] {
		return this.appService.getCategories();
	}
}