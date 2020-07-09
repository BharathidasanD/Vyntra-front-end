import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName="";
  password="";
  message:string;
  invalidLogin=false;
  
  constructor(private router:Router,private authservice:AuthenticationService) {
   }

  ngOnInit(): void {
  }

    authenticate_login(){
     this.authservice.authenticateUser(this.userName,this.password).subscribe((data)=>this.check(data));
    }
    check(id){
      if(id!==0){
        console.log("allowed");
        this.authservice.settingSession(id);
        this.invalidLogin=false;
        console.log(id);
        this.router.navigate(['/home']);
    }
    else{
      console.log(id);
      this.invalidLogin=true;
      this.message="inavalid username password";
    }

    }
}
