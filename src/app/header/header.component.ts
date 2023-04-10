import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  Title = "workshop1"
  test="send";
  showMe!:string;
list=['test1', 'test2']
  show(){
    this.showMe="morning";
  }
}
