import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeletedialogComponent } from '../../products/viewproducts/deletedialog/deletedialog.component';

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


  constructor(private customerservice:CustomersService,private router:Router,private dialog:MatDialog) { }

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

  opendialog()
  {
    let dialogref=this.dialog.open(DeletedialogComponent);
    dialogref.afterClosed().subscribe(result=>{
      console.log(result);
      if(result=='yes')
      {
        this.deleteCustomer();
      }

    });
  }

}
