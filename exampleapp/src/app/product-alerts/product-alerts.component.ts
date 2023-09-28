import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

//it manage only one product
export class ProductAlertsComponent {
  //only a variable and type
  @Input() product: Product | undefined;
  // initialize by the type of EventEmitter
  @Output() notify = new EventEmitter();
}