import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //Creating static data to get the cart functioning 
  cartItems = [
    { id: 1, productId: 1, productName: 'Test 1', qty: 1, price: 250 },
    { id: 2, productId: 5, productName: 'Test 2', qty: 4, price: 350 },
    { id: 3, productId: 2, productName: 'Test 3', qty: 2, price: 150 },
    { id: 4, productId: 3, productName: 'Test 4', qty: 5, price: 300 },
  ];

  cartTotal = 0 //Setting cartTotal to 0 so it can be calculated on the ngOnInit method

  constructor() { }

  ngOnInit(): void {
    this.cartItems.forEach(item => {    //Looping trough the cartItems to get the total
      this.cartTotal += (item.qty * item.price)
    })
  }

}
