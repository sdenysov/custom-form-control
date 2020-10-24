import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ProductService} from './products/services/product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  public productGroup: FormControl;
  public title: string;
  public products$: Observable<any[]>;

  constructor(private productService: ProductService) {
    this.productGroup = new FormControl('');
    this.title = 'product-selection';
    this.products$ = this.productService.getAll$();
  }

  ngOnInit() {
    this.productGroup.valueChanges.subscribe(selectedProduct => console.log(selectedProduct));
  }
}
