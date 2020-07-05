import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { AuthService } from '../../shared/service/auth.service';
import { UserService } from '../../shared/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService : UserService) { }

  canActivate() : Observable<boolean> {
     return this.auth.user$
     .pipe(switchMap(user => this.userService.get(user.uid)), map(appuser => {
       return  appuser.isAdmin ;
     }))
    
  }
}
