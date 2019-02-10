import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // TODO: implement AUTH service front to back
    return this.canEnterRoute();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.canEnterRoute();
  }

  private canEnterRoute() {
    // TODO: implement AUTH service here
    return true;
  }

}
