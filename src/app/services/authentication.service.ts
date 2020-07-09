import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpclient:HttpClient) { }

  authenticateUser(userdata,password){
    let auth=new login();
    auth.userdata=userdata;
    auth.password=password;
  return this.httpclient.post("http://localhost:8080/authenticate",auth);
  }
  settingSession(userid){
    sessionStorage.setItem("logedUserId",userid);
  }
  isUserLogedIn(){
    let logedUser=sessionStorage.getItem("logedUserId");
    console.log("loged user"+logedUser);
    console.log(!(logedUser===null));
    return !(logedUser===null);
  }
  logout(){
    sessionStorage.removeItem("logedUserId");
  }
}
class login{
  public userdata;
  public password;
  constructor(){

  }
}