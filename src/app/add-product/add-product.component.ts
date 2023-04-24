import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../Models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']

  
})
export class AddProductComponent{
  

 P=this.producS.listProdcut[2];

  constructor(private producS:ProductService){}

  Save(F:NgForm){
//     console.log(F.controls['title'].value);
//  this.P.id= this.listProdcut.length++;
//  this.P.title= F.controls['title'].value;
//  this.P.price = F.controls['price'].value;
//  this.P.quantity= F.controls['quantity'].value;


//  this.listProdcut.push(this.P);
 
//  console.log(this.listProdcut.length);
 console.log(this.P);
 
    
  }
}
