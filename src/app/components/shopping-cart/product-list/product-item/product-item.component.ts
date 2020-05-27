import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  @Input() productItem!: Product  //Setting the productItem property as an input from de parent. Using ! to avoid Typescript error due to strictPropertyInitialization

  constructor() {
  }

  ngOnInit(): void {
  }

}
