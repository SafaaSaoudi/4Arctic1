import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProdcut:Product[]=[];
    
  url="http://localhost:3000/products";
  constructor(private http:HttpClient) { }


  getProduct(id:number){
    return this.http.get<Product>(this.url+`/${id}`);
  }

  getAllProducts(){
    return this.http.get<Product[]>(this.url);
  }

  addProduct(p:Product){
    return this.http.post(this.url, p);
  }

  updateProduct(id:number, p:Product){
     return this.http.put(this.url+`/${id}`, p);
  }

  deleteProduct(id:number){
    return this.http.delete(this.url+`/${id}`);
  }
}
