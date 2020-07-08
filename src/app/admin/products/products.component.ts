import { Component, OnInit,ViewChild } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Array<Product>;
  action:string;
  retrivedProduct:Array<Product>;
  selectedProduct:Product;

  displayedColumns:string[];
  dataSource:any;

  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(private productservice:ProductService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.refereshData();
  }
  refereshData() {
    this.productservice.getProducts().subscribe((response)=>this.handleSuccessfulResponse(response));

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        //the url specifies which componenet view/edit
        this.action = params['action'];
        //geting id of the selected product
        const id=params['productid'];//this is a url parameter assigning to local variable
        //based on the id retrive product from products array
        if(id){
          this.selectedProduct=this.products.find(product=>{
            return product.productId===+id;
          })
        }

      }
    );
  }
//the retrived products from database
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

    this.displayedColumns= ['productId', 'productName','Detail'];
    this.dataSource = new MatTableDataSource(this.products);
    this.dataSource.paginator=this.paginator;

  }

 addProduct()
 {
  this.selectedProduct = new Product();
  this.router.navigate(['admin', 'products'], { queryParams: { action: 'add' } });
 }

 viewProduct(productid:number)
 {
   
    this.router.navigate(['admin','products'],{queryParams:{productid,action: 'view' }});
 }

 search(filterdata:string)
  {
    this.dataSource.filter=filterdata.trim().toLowerCase();
  }

}
