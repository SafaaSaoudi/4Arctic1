import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

constructor(private actR:ActivatedRoute){}
idProduct!:number;
option="";
ngOnInit(): void {
  this.idProduct=this.actR.snapshot.params['param'];
  this.actR.queryParams.subscribe(data => this.option=data['name'])
//console.log(this.option);


  }



}
