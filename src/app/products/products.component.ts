import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  prix!:number;
  listProdcut!:Product[];

    constructor(private R:Router, private productS:ProductService){}

    ngOnInit(){
      this.productS.getAllProducts().subscribe(data => this.listProdcut=data);
    }
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
