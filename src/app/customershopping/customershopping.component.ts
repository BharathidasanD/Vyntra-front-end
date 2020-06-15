import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-customershopping',
  templateUrl: './customershopping.component.html',
  styleUrls: ['./customershopping.component.css']
})
export class CustomershoppingComponent implements OnInit  {

  products:Array<Product>;
  retrivedProduct:Array<Product>;
  selectedProduct:Product;
 
  constructor(private productservice:ProductService,
    private router:Router) { }

  ngOnInit(): void {
   this.refereshData();   
  }
  refereshData() {
    this.productservice.getProducts().subscribe((response)=>this.handleSuccessfulResponse(response));
  }
  handleSuccessfulResponse(response) {
    this.products = new Array<Product>();
    //store the retrived product to retrivedProduct
    this.retrivedProduct=response;
    for(const product of this.retrivedProduct){
      const productwithretrivedimage=new Product();
      productwithretrivedimage.product_id=product.product_id;
      productwithretrivedimage.product_name=product.product_name;
      productwithretrivedimage.retrived_image='data:image/jpeg;base64,'+product.picByte;
      productwithretrivedimage.product_detail=product.product_detail;
      productwithretrivedimage.product_available=product.product_available;
      productwithretrivedimage.product_price=product.product_price;
      productwithretrivedimage.type_of_user=product.type_of_user;
      productwithretrivedimage.picByte=product.picByte;
      this.products.push(productwithretrivedimage);
    }
  }
  
}
