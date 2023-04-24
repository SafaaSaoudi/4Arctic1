import { Component } from '@angular/core';
import { Product } from '../Models/product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  prix!:number;
  listProdcut=this.productS.listProdcut;
  
    constructor(private R:Router, private productS:ProductService){}

    BuyProduct(indice:number){

      this.listProdcut[indice].quantity--;    
    }
    LikeProduct(indice:number){

      this.listProdcut[indice].like++;    
    }

    showDetails(id:number){
    this.R.navigate(['products/productDetails', id], {queryParams:{'name':'test'}});
    }
}
