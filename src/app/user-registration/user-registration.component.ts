import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomersService } from '../services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  message="";
  constructor(private customerservice: CustomersService,private router:Router) {

  }
  customerModel = new Customer(0, "", "", "", "", "", "", "", "");
  ngOnInit(): void {

  }
  public CustomerRegistration() {
    console.log(this.customerModel);
    let resp = this.customerservice.addCustomer(this.customerModel);
    resp.subscribe((data) => this.message = data);
    console.log(this.message); 
  }
  public goHome()
  {
    setTimeout(()=>{
      this.router.navigate(['/']);
    },6000);//6sec
       
  }


}
