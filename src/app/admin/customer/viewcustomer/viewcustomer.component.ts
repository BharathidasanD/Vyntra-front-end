import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {

  @Input()
  customer:Customer;

  @Output()
  userDeletedEvent=new EventEmitter();


  constructor(private customerservice:CustomersService,private router:Router) { }

  ngOnInit(): void {
  }

  deleteCustomer() {
    this.customerservice.deleteCustomer(this.customer.user_id).subscribe(
      (customer) => {
        this.userDeletedEvent.emit();
        console.log("try to navigate");
        this.router.navigate(['admin','customers']);
      }
    );
  }

}
