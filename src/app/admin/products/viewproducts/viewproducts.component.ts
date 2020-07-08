import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeletedialogComponent } from './deletedialog/deletedialog.component';


@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {


  @Input()
  product:Product;
 

  @Output()
  deletedproductevent=new EventEmitter();

  constructor(private productservice:ProductService,
    private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    console.log("here");
    console.log(this.product.productId);
  }

  deleteProduct()
  {
    
    this.productservice.deleteProduct(this.product.productId).subscribe(
      (product)=>{
        this.deletedproductevent.emit();
        this.router.navigate(['admin','products']);
      }
    );
    
  }

  editProduct()
  {
    this.router.navigate(['admin','products'],{queryParams: { action: 'edit', productid: this.product.productId } })
  }
  opendialog()
  {
    let dialogref=this.dialog.open(DeletedialogComponent);
    dialogref.afterClosed().subscribe(result=>{
      console.log(result);
      if(result=='yes')
      {
        this.deleteProduct();
      }

    });
  }

}
