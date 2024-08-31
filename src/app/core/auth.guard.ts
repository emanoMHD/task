import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../account/account.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private accountService:AccountService) {}
  

  
canActivate(route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): 
  boolean 
  | Promise<boolean 
 >{
   let token = this.accountService.getTokenFromLocal();
   if (this.accountService.isUserLoggedIn()) {
     const helper = new JwtHelperService();
     const isExpired = helper.isTokenExpired(token);
     if(!isExpired){
      /* if(route.data['permission']){
         let permissions: Array<string> = this.accountService.getCurrentUser().Permissions;
         let routePermissions: Array<string> = route.data['permission'];
         let result =permissions.filter(p1 => routePermissions.some(p2 => p2 == p1));
         if(result.length == 0){
*/
           this.router.navigate(['/account/login']);
           return false;
         
       }
       return true;
       
     }else{
       this.accountService.removeToken();
       this.router.navigate(['/account/login']);
       return false;
     }
   }
   //this.router.navigate(['/account/login']);
   //return false;
}