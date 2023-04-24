import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../Models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent{
  listProdcut:Product[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}];
 P=this.listProdcut[2];
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
