import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css'],
  providers:[ProductService]
})
export class ServiceExampleComponent implements OnInit {


  products!:Product[];

  constructor(private productService:ProductService, private fb:FormBuilder) {

  }

  ngOnInit(): void {
  }
  getProducts()
  {
    this.products=this.productService.getProducts();
  }

}
