import { Component, Input } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trial';
  products:Product[];
  Entername="a";
  parentData="";
  value = "";
  productService;
  constructor(){  
    this.productService=new ProductService();  
  }   
  getProducts() {       
    this.products=this.productService.getProducts();  
  }    
  
  TransferData(){
    this.parentData=this.Entername;
  }
  sendData(value){
    this.value=value;
  }
}
