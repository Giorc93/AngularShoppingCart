import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Jackson Black', 'Black guitar 1', 300),
    new Product(2, 'Jackson Black', 'Black guitar 2', 350),
    new Product(3, 'Jackson Black', 'Black guitar 3', 400),
    new Product(4, 'Jackson Black', 'Black guitar 4', 250),
    new Product(5, 'Jackson Black', 'Black guitar 5', 150),
    new Product(6, 'Jackson Black', 'Black guitar 6', 200),
    new Product(7, 'Jackson Black', 'Black guitar 7', 100),
    new Product(8, 'Jackson Black', 'Black guitar 8', 300),
  ]

  constructor() { }

  getProducts(): Product[] {
    //ToDo: Populate Products from API and return Observable
    return this.products
    //Return array of products created
  }
}
