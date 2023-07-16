import { Component, OnInit } from '@angular/core';
import productList from 'src/app/data/data';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  products= productList;
  cartProducts: Array<any> = [];
  data: any;


  constructor() {
  }

  ngOnInit(): void {
  }
  addToCart(productId: any): any {
    this.data = this.products.find(m => m?._id == productId)
    this.cartProducts.push(this.data)
    let unique = [...new Set(this.cartProducts)];
    const products = JSON.stringify(unique)
    localStorage.setItem("productsCart", products)
  }

}
