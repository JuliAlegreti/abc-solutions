import { Get, Controller } from '@nestjs/common';
import { AppService } from '../app.service';
import { Category } from 'class/Category';

@Controller('category')
export class CategoryController {
	constructor(private readonly appService: AppService) {}

	/**
	 * Ruta raíz del controlador de categorias:
	 * 	Devuelve todas las categorias del JSON
	 */
	@Get()
	findAll(): Category[] {
		return this.appService.getCategories();
	}
}