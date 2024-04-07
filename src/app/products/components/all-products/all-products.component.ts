import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit { // OnInit is an interface

  products:any[] = [];
  categories:any[] = [];
  constructor(private service:ProductsService){}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories()
  }

  getProducts(){
    this.service.getAllProducts().subscribe( 
      (res:any)=> {
        //console.log(res);
        this.products = res;
    } )
  }

  getCategories(){
    this.service.getAllCategories().subscribe(
      (res:any)=>{
        this.categories = res;
      }
    )
  }

  filterCategory(event:any){
    let category = event.target.value;
    console.log(category);
    if(category == 'all') return this.getProducts();
    this.getFilteredProducts(category);
  }

  getFilteredProducts(category:string){
    this.service.getFilteredProducts(category).subscribe(
      (res:any)=>{
        this.products = res;
      }
    )
  }

}
