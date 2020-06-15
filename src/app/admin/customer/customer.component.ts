import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Customer';
import { CustomersService } from 'src/app/services/customers.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  Customers:Array<Customer>;
  action:string;
  selectedCustomer:Customer;

  constructor(private customerservice:CustomersService,
    private router: Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.refereshData();

  }
  refereshData(){
    this.customerservice.getCustomers().subscribe(data=>this.handleSuccessfulResponse(data));
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const selectedCustomerId = params['id'];
        if (selectedCustomerId) {
          this.selectedCustomer = this.Customers.find(customer => customer.user_id === +selectedCustomerId);
        }
      }
    );
  }


  handleSuccessfulResponse(data) {
    this.Customers = data;
  }
  viewCustomer(id: number) {
    this.router.navigate(['admin','customers'], {queryParams : {id, action: 'view'}});
  }
}
