import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {Injectable, OnInit} from "@angular/core";


// export const expenseGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

  private router: Router;
  constructor(router: Router) {
    this.router = router;
    console.log('ExpenseGuard class worked')
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log('canActivate method works')
    console.log('url that user called : '+state.url)
    let url = state.url
    // console.log();
    let isUserLoggedIn = localStorage.getItem('isUserLoggedIn')!

    if (isUserLoggedIn && url === '/options') {
      // ** have to use .parseUrl() instead navigate() ** if not use will loop infin
      // i set navigateByUrl('/options') on login component
      // so when it goes to /options mean guards service as canActivate(...) works
      // now you can't use navigateByUrl() again
      // you have to use parseUrl('/options') instead
      console.log('isUserLoggedIn : ' + isUserLoggedIn)
      this.router.parseUrl('/options')
      return true;
    }
    if (isUserLoggedIn && url === '/logout') {
      this.router.parseUrl('/logout') // if did good will go ahead to /login focus look at onInt() {}
      return true;
    }
    // Redirect to the login page if the user is not authenticated
    // parseUrl does not need
    // cause /login it's not protected by guard
    console.log('isUserLoggedIn : ' + isUserLoggedIn)
    this.router.navigateByUrl('/login')
    return false;
  }

}
