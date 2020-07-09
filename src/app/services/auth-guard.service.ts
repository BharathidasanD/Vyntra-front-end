import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authservice:AuthenticationService,private router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authservice.isUserLogedIn())
      return true;

    this.router.navigate(['login']);
    return false;

  }
}
