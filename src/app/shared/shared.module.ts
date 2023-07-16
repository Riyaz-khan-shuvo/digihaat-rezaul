import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from './components/lazy-loading/product-cart/product-cart.component';



@NgModule({
  declarations: [
    ProductCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductCartComponent
  ]
})
export class SharedModule { }
