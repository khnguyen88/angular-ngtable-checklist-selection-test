import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
  selector: 'table-selection-events-demo',
  templateUrl: 'table-selection-events-demo.html',
  providers: [MessageService],
})
export class TableSelectionEventsDemo implements OnInit {
  products: Product[];

  selectedProduct: Product[];

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
  }

  onRowSelect(event) {
    alert(this.selectedProduct.length);
    let awesomestring = '';

    this.selectedProduct.forEach(function (value) {
      alert(value.name);
      awesomestring += value.name.toString() + ', ';
    });

    alert(awesomestring);

    this.messageService.add({
      severity: 'info',
      summary: 'Product Selected',
      detail: event.data.name,
    });
  }

  onRowUnselect(event) {
    alert(this.selectedProduct.length);

    this.messageService.add({
      severity: 'info',
      summary: 'Product Unselected',
      detail: event.data.name,
    });
  }
}
