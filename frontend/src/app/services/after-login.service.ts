import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TokenService } from './token.service';
@Injectable()
export class AfterLoginService implements CanActivate {
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    //throw new Error("Method not implemented.");
    return this.Token.loggedIn();
  }
  constructor(private Token: TokenService) { }
}
