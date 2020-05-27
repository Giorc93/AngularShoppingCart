import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../../services/messenger.service'  //Importing MessengerService
import { Product } from '../../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //Creating static data to get the cart functioning 
  cartItems = [
    // { id: 1, productId: 1, productName: 'Test 1', qty: 1, price: 250 },
    // { id: 2, productId: 5, productName: 'Test 2', qty: 4, price: 350 },
    // { id: 3, productId: 2, productName: 'Test 3', qty: 2, price: 150 },
    // { id: 4, productId: 3, productName: 'Test 4', qty: 5, price: 300 },
  ];

  cartTotal = 0 //Setting cartTotal to 0 so it can be calculated on the ngOnInit method

  constructor(private msg: MessengerService) { }  //Creating dependency injection

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)

    })
  }

  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }

    this.cartTotal = 0;
    this.cartItems.forEach(item => {    //Looping trough the cartItems to get the total
      this.cartTotal += (item.qty * item.price)
    })
  }

}
