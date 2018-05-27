import { Injectable } from '@nestjs/common';
import { products, categories } from 'database';
import { Product } from 'class/Product';
import { Category } from 'class/Category';

@Injectable()
export class AppService {
	getProducts(): Product[] {
		return products;
	}

	getCategories(): Category[] {
		return categories;
	}
}
