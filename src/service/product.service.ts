import { Injectable } from '@angular/core';
import { Product } from 'src/product';

@Injectable({
 providedIn: 'root'
})
export class ProductService {

  constructor() { }
  public getProducts()
  {
    let products:Product[];
    products=[
      new Product(1,'Memomry Card',500),
      new Product(2,'Pen Drive',750),
      new Product(3,'Power Bank',500),
    ]
    return products;
  }
}
