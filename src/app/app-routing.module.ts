import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from 'src/app/admin/customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProductsComponent } from './admin/products/products.component';
import { CustomershoppingComponent } from './customershopping/customershopping.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'admin/customers',component:CustomerComponent},
  {path:'home',component:CustomershoppingComponent},
  {path:'register',component:UserRegistrationComponent},
  {path:'myprofile',component:MyProfileComponent},
  {path:'admin/products',component:ProductsComponent},
  {path:'admin',component:AdminComponent},
  {path:'logout',component:LogoutComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
