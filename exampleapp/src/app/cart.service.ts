import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private http: HttpClient
  ) { }
  items: Product[] = [];
  
  //add products to cart service
  addToCart(product: Product){
    this.items.push(product);
  }

  //get products from cart service
  getItems(){
    return this.items
  }

  //clean cart service
  clearCart(){
    this.items = [];
    return this.items;
  }

  //using httpclient
  getShippingPrices(){
    //define item types from array
    return this.http.get<{type:string, price: number}[]>('/assets/shipping.json');
  }
}
