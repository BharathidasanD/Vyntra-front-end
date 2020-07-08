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
      productwithretrivedimage.productId=product.productId;
      productwithretrivedimage.productName=product.productName;
      productwithretrivedimage.retrivedImage='data:image/jpeg;base64,'+product.picByte;
      productwithretrivedimage.productDetail=product.productDetail;
      productwithretrivedimage.productAvailable=product.productAvailable;
      productwithretrivedimage.productPrice=product.productPrice;
      productwithretrivedimage.typeOfUser=product.typeOfUser;
      productwithretrivedimage.picByte=product.picByte;
      this.products.push(productwithretrivedimage);
    }
  }
  
}
