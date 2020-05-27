import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/product';
import { MessengerService } from '../../../../services/messenger.service'   //Importing the service to create de Data Injection

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  @Input() productItem!: Product  //Setting the productItem property as an input from de parent. Using ! to avoid Typescript error due to strictPropertyInitialization

  constructor(private msg: MessengerService) {    //Dependency injection of MessengerService
  }

  ngOnInit(): void {

  }

  handleAddToCart() {     //Will be executed after clicking the add to cart button 
    this.msg.sendMsg(this.productItem)    //Sending the productItem data trhough the sendMsg()
  }


}
