import { Component, OnInit } from '@angular/core';
import { Product } from '../../class/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	private products: Product[];

	constructor() { }

	ngOnInit() {
		this.products = JSON.parse(window.localStorage.getItem('products'))
	}

	delete(index){
		this.products[index].add = false;
		this.products.splice(index, 1);
		window.localStorage.setItem('products', JSON.stringify(this.products));
	}

}
