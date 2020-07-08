import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName="";
  password="";
  message:string;
  constructor(private router:Router) {
   }

  ngOnInit(): void {
  }

    admin_login(){
      if(this.userName=='iamadmin@admin.vynta' && this.password=='password1Aa'){
    
        this.router.navigate(['/admin']);
      }
      else{
        this.message="inavalid username or password";
      }

    }
}
