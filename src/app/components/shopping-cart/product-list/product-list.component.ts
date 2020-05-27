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
    this.productList = this.productService.getProducts() //Loads the product through the getProducts method (Loading data)
  }

}
