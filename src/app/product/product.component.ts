import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : any;
  productsBlank : any;

  constructor() {

    this.products = [
      {
        "id": 4387,
        "name": "watch",
        "brand": "Timex",
        "price": 7000
      }, {
        "id": 3877,
        "name": "Mobile",
        "brand": "One Plus",
        "price": 55000
      }, {
        "id": 8938,
        "name": "Book",
        "brand": "head first",
        "price": 999
      }, {
        "id": 3780,
        "name": "T-Shirt",
        "brand": "US POLO",
        "price": 1699
      }, {
        "id": 5899,
        "name": "AC",
        "brand": "LG",
        "price": 30000
      }
    ]

    this.productsBlank = [

    ]

  }

  ngOnInit() {
  }

}
