import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  public getProducts(){
    let products:Product[];
    products=[  
      new Product(1,'Memory Card'),  
      new Product(1,'Pen Drive'),  
      new Product(1,'Power Bank')  
    ]
    return products;
  }
}
