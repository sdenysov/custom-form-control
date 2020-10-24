import {NgModule} from '@angular/core';
import {ProductComponent} from './components/product.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductComponent]
})

export class AppProductsModule {}
