import { Injectable } from '@nestjs/common';
import { products, categories } from './db';
import { Product } from 'class/Product';
import { Category } from 'class/Category';

@Injectable()
export class AppService {
	/**
	 * Retorna todos los productos del json
	 */
	getProducts(): Product[] {
		return products;
	}

	/**
	 * Retorna todas las categorias del json
	 */
	getCategories(): Category[] {
		return categories;
	}
}
