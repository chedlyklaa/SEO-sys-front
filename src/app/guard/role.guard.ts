import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):   Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const allowedRoles = route.data['roles'] as Array<string>;
      const userRole  = this.authService.getuserrole() ;

      if (this.authService.isloggedin()) {
        const userRole = this.authService.getrole();
        if (allowedRoles && allowedRoles.indexOf(userRole as string) === -1) {
          this.router.navigate(['/']);
          return false;
        }
        return true;
    }
    this.router.navigate(['/']);
        return false;
  }
}

