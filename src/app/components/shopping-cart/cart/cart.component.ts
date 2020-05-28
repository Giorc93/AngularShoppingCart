import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../../services/messenger.service'  //Importing MessengerService
import { Product } from '../../../models/product';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //Creating static data to get the cart functioning 
  cartItems = [];

  cartTotal = 0 //Setting cartTotal to 0 so it can be calculated on the ngOnInit method

  constructor(        //Creating dependency injection
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems()

    })
  }

  loadCartItems() {
    this.cartService.getCarItems().subscribe((items: CartItem[]) => {
      this.cartItems = items
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {    //Looping trough the cartItems to get the total
      this.cartTotal += (item.qty * item.price)
    })
  }
}
