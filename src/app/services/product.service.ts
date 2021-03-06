import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' //HttpClient is an injectable
import { Observable } from 'rxjs'
import { Product } from '../models/product';

import { productsURL } from '../config/api'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { } //Dependency injection

  getProducts(): Observable<Product[]> {  //Expecting the method returns an array, but actually it'll return an observable. So its necessary to import the observable from 'rxjs'
    //ToDo: Populate Products from API and return Observable
    return this.http.get<Product[]>(productsURL);  //Must specify datatype <Product[]> everywhere
    //Return array of products created
  }
}
