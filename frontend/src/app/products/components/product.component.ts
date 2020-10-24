import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

const PRODUCTS_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ProductComponent),
  multi: true
};

@Component({
  selector: 'app-products-form-control',
  providers: [PRODUCTS_VALUE_ACCESSOR],
  templateUrl: 'product.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({height: '*'})),
      state('closed', style({height: '0'})),
      transition('open <=> closed', animate('200ms ease-in'))
    ])
  ],
  styleUrls: ['product.component.scss']
})
export class ProductComponent implements ControlValueAccessor {

  private value: string;
  private onChange: Function;
  private onTouched: Function;

  public isOpen: boolean;

  @Input() products: any[];

  constructor() {
    this.onChange = (_: any) => {};
    this.onTouched = () => {};
    this.isOpen = true;
  }

  public isActive(product: string): boolean {
    return this.value === product;
  }

  public writeValue(value: any): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public selectProduct(product: any) {
    this.value = product;
    this.onTouched();
    this.onChange(product);
  }
}
