import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ShoppingCart } from 'src/app/shoppingcart';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cartProducts:Array<ShoppingCart>;
  retrivedCartProduct:Array<ShoppingCart>;
  constructor(private shoppingcartservice:ShoppingCartService) { }

  ngOnInit(): void {
    this.refereshData();
  }
  refereshData() {
    this.shoppingcartservice.getCartItems().subscribe((response)=>this.handleSuccessfulResponse(response));
  }
  handleSuccessfulResponse(response) {
    this.cartProducts = new Array<ShoppingCart>();
    //store the retrived product to retrivedProduct
    this.retrivedCartProduct=response;
    for(const product of this.retrivedCartProduct){
      const productwithretrivedimage=new ShoppingCart();
      productwithretrivedimage.productId=product.productId;
      productwithretrivedimage.productName=product.productName;
      productwithretrivedimage.totalPrice=product.totalPrice;
      productwithretrivedimage.noOfProduct=product.noOfProduct;
      productwithretrivedimage.retrivedImage='data:image/jpeg;base64,'+product.picByte;
      productwithretrivedimage.productDetail=product.productDetail;
      productwithretrivedimage.picByte=product.picByte;
      this.cartProducts.push(productwithretrivedimage);
    }
  }
}
