import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import{MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import{FormsModule} from '@angular/forms';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProductsComponent } from './admin/products/products.component';
import { CustomerComponent } from './admin/customer/customer.component';
import {ViewcustomerComponent} from './admin/customer/viewcustomer/viewcustomer.component';
import { AddproductComponent } from './admin/products/addproduct/addproduct.component';
import { ViewproductsComponent } from './admin/products/viewproducts/viewproducts.component';
import { CustomershoppingComponent } from './customershopping/customershopping.component'
import {MatDialogModule} from '@angular/material/dialog';
import { DeletedialogComponent } from './admin/products/viewproducts/deletedialog/deletedialog.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {NgImageSliderModule} from 'ng-image-slider';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AdminComponent,
    UserRegistrationComponent,
    MyProfileComponent,
    ViewcustomerComponent,
    ProductsComponent,
    AddproductComponent,
    ViewproductsComponent,
    CustomershoppingComponent,
    DeletedialogComponent,
    ImagesliderComponent,
    LoginComponent,
    LogoutComponent,
   
  ],
  imports: [
    BrowserModule,MatToolbarModule,MatSidenavModule,MatCardModule,MatFormFieldModule,HttpClientModule,FormsModule,
    AppRoutingModule,MatIconModule,MatListModule,MatMenuModule,MatInputModule,MatButtonModule,MatDialogModule,
    BrowserAnimationsModule,MatTableModule,MatPaginatorModule,NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
