import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { Cart } from '../cart';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-customershopping',
  templateUrl: './customershopping.component.html',
  styleUrls: ['./customershopping.component.css']
})
export class CustomershoppingComponent implements OnInit  {

  products:Array<Product>;
  retrivedProduct:Array<Product>;
  selectedProduct:Product;
  msg:any;
   cartdetail:Cart;

  constructor(private productservice:ProductService,
    private router:Router,private cartservice:ShoppingCartService,private authservice:AuthenticationService) { }

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

  addProductToCart(productid:number){
    if(this.authservice.isUserLogedIn()){
    let logedUser=sessionStorage.getItem("logedUserId");
    this.cartdetail=new Cart();
    this.cartdetail.noOfProducts=1;
    this.cartdetail.productId=productid;
    this.cartdetail.userId=Number(logedUser);
    this.cartservice.setCartItems(this.cartdetail).subscribe((data)=>this.msg=data);
    console.log(this.msg);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  
}

