import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclientproduct:HttpClient) { }

  getProducts(){
    return this.httpclientproduct.get<Product[]>("http://localhost:8080/products/listproducts");
  }

  addProduct(newproduct:Product){
    return this.httpclientproduct.post<Product>("http://localhost:8080/products/addproduct",newproduct);
  }

  deleteProduct(productid)
  {
    return this.httpclientproduct.delete<Product>("http://localhost:8080/products/"+productid,{responseType:'text' as 'json'})
  }

  updateProduct(updatedProduct:Product)
  {
    return this.httpclientproduct.put<Product>("http://localhost:8080/products/update",updatedProduct);
  }
}
