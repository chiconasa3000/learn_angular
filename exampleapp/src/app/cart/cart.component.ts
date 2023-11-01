import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  //get bought items from cart service
  items = this.cartService.getItems();
  constructor(
    private cartService: CartService
  ){}
}
