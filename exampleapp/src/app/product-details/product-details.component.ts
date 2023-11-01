import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product, products} from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  
  product: Product | undefined;
  
  constructor(
    //inject activatedroute in constructor
    private route: ActivatedRoute,
    //using cart service
    private cartService: CartService
  ){}
  
  //adding product to cart service
  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }

  ngOnInit(): void {
    // First get the product id from the current route
    // map of parameters in the url
    const routeParams = this.route.snapshot.paramMap;
    // using routeParams you could access at the property
    const productIdFromRoute = Number(routeParams.get('productId'));
    // Find the product that correspond with the id provided in route
    this.product = products.find(product => product.id === productIdFromRoute)
  }
}
