import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { AccountService } from '../../account/account.service';
@Injectable({
  providedIn: 'root'
})
export class permission  {
  constructor(private router: Router,private accountService:AccountService) {}
  

token = localStorage.getItem('token')||sessionStorage.getItem('token');
  
  isGuard(permissionName: string):boolean{
    if(this.token){
     /* let userPernissions:string[] = this.accountService.getCurrentUser().Permissions;
      let index = userPernissions.findIndex(p => p == permissionName);
      if(index == -1){
        return false;
      }
      else{
        return true;
      }
    }else{
      return false;
    }*/
  }
  return false
}}
