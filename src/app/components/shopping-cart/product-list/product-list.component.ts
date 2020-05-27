//Product List Component called from ShoppingCart trhough selector

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []  //Sets (property) empty array to load the products 

  constructor(private productService: ProductService) { } //Dependency injection of ProductService

  ngOnInit(): void {  //Executes after the component is loaded succesfuly
    this.productService.getProducts().subscribe((products) => { //Loads the product through the getProducts method (Loading data). After the observable is retrieved from the API, must specify the data type so and observable will not be assigned to a Product type (array)
      this.productList = products;
      console.log(products)
    })
  }

}
