import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingCart } from '../shoppingcart';
import { Cart } from '../cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private httpclient:HttpClient) { }

  getCartItems(){
   return this.httpclient.get<ShoppingCart[]>("http://localhost:8080/cart/listcartdetails");
  }

  setCartItems(cartitem){
    console.log("service");
    console.log(cartitem);
    return this.httpclient.post<any>("http://localhost:8080/cart/addcartdetails",cartitem,{responseType:'text' as 'json'});
  }
}
