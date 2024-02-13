import { Observable, map, tap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";

const checkAuthStatusLogin = (): Observable<boolean> => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication()
    .pipe(
      tap( isAuthenticated => console.log("Authenticated: ",isAuthenticated) ),
      tap( isAuthenticated => {
        if (isAuthenticated) {
          router.navigate(['/heroes/list'])
        }
      }),
      map(isAuthenticated => !isAuthenticated)
    )
}


export const canMatchGuardLogin: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  console.log('CanMatchLogin');
  console.log({ route, segments });

  return checkAuthStatusLogin();
}

export const canActivateGuardLogin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('CanActivateLogin');
  console.log({ route, state });

  return checkAuthStatusLogin();
};
