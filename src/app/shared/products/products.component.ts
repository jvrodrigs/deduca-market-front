import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: Product[];

  constructor(
    private service: ApiService
  ) {}

  ngOnInit(): void {
    this.service.listProducts.subscribe(
      res => {
        this.products = res;
      }, (error) => {
        this.service.errorHandler("Ocorreu um error na listagem dos produtos!")
      }
    )
  }

}
