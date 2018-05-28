import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/app.request';
import { Product } from '../../class/Product';
import { Category } from '../../class/Category';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public products:Product[];
	public productsTmp:Product[];
	public categories:Category[];
	public nameFilter:string = '';
	public chekedValue:boolean = false;
	public categoriesFilter:number[] = [];
	public available:boolean = false;
	public notAvailable:boolean = false;
	public bestSeller:boolean = false;
	public productSelected:Product;

    constructor(private request: RequestService, private modalService: NgbModal) {}

    ngOnInit() {	
		this.getProducts();
		this.getCategories();
    }

	getProducts(){
		this.request.get('products',{}).subscribe((res)=>{
			this.products = res;
			this.productsTmp = res;
		},null,()=>{
			this.confirmCart()
		});
	}

	confirmCart(){
		let dataStore = JSON.parse(window.localStorage.getItem('products'));
		let inDataStore = [];
		if(dataStore){
			for(let data of dataStore){
				inDataStore.push(data.id)
			}
			
			this.products.forEach((product)=>{
				if(inDataStore.indexOf(product.id)>-1){
					product.add = true;
				}
			})			
		}
	}

	getCategories(){
		this.request.get('category',{}).subscribe((res)=>{
			this.categories = res;
		},null,()=>{
			this.categories.forEach((category)=>{
				category['checked'] = false;				
			})
		});
	}

	searchProduct(){
		if(!this.nameFilter) {
			this.products = this.productsTmp;
		}else{
			this.products = this.productsTmp;
			this.products = this.products.filter((product)=>{
				return product.name.toLowerCase().indexOf(this.nameFilter) > -1;
			});
		}
	}

	addCategoryToFilter(category){
		if(this.categoriesFilter.length == 0 || this.categoriesFilter.indexOf(category)==-1){
			this.categoriesFilter.push(category)			
		}else{			
			this.categoriesFilter.splice(this.categoriesFilter.indexOf(category), 1);			
		}				
		this.filtersByCategory();
	}

	filterByDisponibility(){
		if(this.available){
			this.products = this.products.filter((product)=>{
				return product.available;
			});
		}else{
			this.products = this.productsTmp;
		}
	}

	filterByNotDisponibility(){
		if(this.notAvailable){
			this.products = this.products.filter((product)=>{
				return !product.available;
			});
		}else{
			this.products = this.productsTmp;
		}
	}

	filterByBestSeller(){
		if(this.bestSeller){
			this.products = this.products.filter((product)=>{
				return product.best_seller;
			});
		}else{
			this.products = this.productsTmp;
		}
	}

	orderProducts(type){		
		if(type=='name') this.products.sort(this.sortByName);
		else if(type=='higherPrice') this.products.sort(this.sortByHigherPrice);
		else if(type=='lowerPrice') this.products.sort(this.sortByLowerPrice);
		else this.products = this.productsTmp;
	}	

	open(content, product) {
		this.productSelected = product;
		this.modalService.open(content).result.then((result) => {}, (reason) => {});
	}

	addToCart(){
		if(!this.productSelected['add']){
			let items = [];
			this.productSelected.add = true;

			items = JSON.parse(window.localStorage.getItem('products'));
			items = (items) ? items : [];
			items.push(this.productSelected);

			window.localStorage.setItem('products', JSON.stringify(items));
		}			
	}

	private sortByName(a,b){		
		if (a.name.toLowerCase() < b.name.toLowerCase())
			return -1
		if (a.name.toLowerCase() > b.name.toLowerCase())
			return 1
		return 0;		
	}

	private sortByLowerPrice(a,b){		
		if (a.price < b.price)
			return -1
		if (a.price > b.price)
			return 1
		return 0;		
	}

	private sortByHigherPrice(a,b){		
		if (a.price < b.price)
			return 1
		if (a.price > b.price)
			return -1
		return 0;		
	}

	private filtersByCategory(){
		if(this.categoriesFilter.length==0){			
			this.products = this.productsTmp;
		}else{			
			this.products = [];
			this.productsTmp.filter((product)=>{
				this.categoriesFilter.forEach((item)=>{					
					if(product.categories.indexOf(item)>-1) this.products.push(product);
				})	
			});
		}
	}
}
