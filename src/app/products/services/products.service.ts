import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }  // Dependency Injection

  getAllProducts(){
    // return this.http.get('https://fakestoreapi.com/products');
    return this.http.get(environment.baseApi+'products');
  }

  getAllCategories(){
    return this.http.get(environment.baseApi+'products/categories');
  }

  getFilteredProducts(category:string){
    return this.http.get(environment.baseApi+'products/category/'+category);
  }
}
