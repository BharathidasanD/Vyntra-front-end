import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from '../Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  url:string;
  constructor(private http:HttpClient) {
    this.url="http://localhost:8080/users/listusers";
   }

   getCustomers()
   {
     return this.http.get<Customer[]>(this.url);
   }

   public addCustomer(newCustomer)
   {
     console.log("service")
     console.log(newCustomer)
     return this.http.post<any>("http://localhost:8080/users/addCustomer",newCustomer,{responseType:'text' as 'json'});
     
   }

   public deleteCustomer(user_id){
     return this.http.delete<any>("http://localhost:8080/users/" + user_id,{responseType:'text' as 'json'});
   }
}
