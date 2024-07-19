import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthenticateService} from "../../services/authenticate.service";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common"; // ***

// *** child components can use service, just inject dose not provider
@Component({
  selector: 'app-guards-routing-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink,
    // RouterOutlet, // set on parent component
  ],
  templateUrl: './guards-routing-login.component.html',
  styleUrl: './guards-routing-login.component.css'
})
export class GuardsRoutingLoginComponent {

  // not provider service in child component
  private authenticateService: AuthenticateService;
  private router: Router;
  // disableGuardsLogOutButton = false;
  messageLogin: string = '*** Login it\'s not done';

  constructor(authenticateService: AuthenticateService, router: Router) {
    this.authenticateService = authenticateService;
    this.router = router;
  }

  // protected onClickedSubmitFormLogin(formLogin: any) {
  //  let username = formLogin['username']
  //  let password = formLogin['password']
  //  console.log(`${username} , ${password}`);
    /*
      this.authenticateService.login(username, password).subscribe(
        response => {
          /!*console.log(`isUserLoggedIn (response) : ${response}`);
          console.log(`isUserLoggedIn (local storage) : ${localStorage.getItem('isUserLoggedIn')}`);*!/
          if (response) {
            // set visible button
            /!*
            it fast you can't see so it does not need
            this.messageLogin = '*** Login Successful!';
            this.disableGuardsLogOutButton = true*!/
            // *** navigate is based on the provided array of commands and a starting point. If no starting route is provided, the navigation is absolute.
            // this.router.navigate(['/table-students'])
            // *** same result just can pass only absolute route path.
            this.router.navigateByUrl('/options') // go to this path then guard service will work
            // shift rout
          }
        })
      */
  // }

  protected onClickedSubmitFormLogin(formLogin: any) {
    let username = formLogin['username']
    let password = formLogin['password']
    // login
    // .subscribe() works for pipe() , next()
    this.authenticateService.login(username, password).subscribe(
      response => {
        if (response === 'true') {
          // *** navigate is based on the provided array of commands and a starting point. If no starting route is provided, the navigation is absolute.
          // this.router.navigate(['/table-students'])
          // *** same result just can pass only absolute route path.
          this.router.navigateByUrl('/options') // go to this path then guard service will work
        }
      })
  }


  /*protected onClickedSubmitFormLogOut() {
    this.messageLogin = '*** Login it\'s not done';
    this.disableGuardsLogOutButton = false
  }*/
}
