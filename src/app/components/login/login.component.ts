import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthenticateService} from "../../services/authenticate.service";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common"; // ***

// *** child components can use service, just inject dose not provider
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink,
    // RouterOutlet, // set on parent component
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  // not provider service in child component
  private readonly authenticateService: AuthenticateService;
  private readonly router: Router;
  // disableGuardsLogOutButton = false;
  protected messageLogin: string = '*** Login it\'s not done';

  constructor(authenticateService: AuthenticateService, router: Router) {
    this.authenticateService = authenticateService;
    this.router = router;
  }

  ngOnInit(): void {
    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn')!
    if (isUserLoggedIn) {
      this.router.navigateByUrl('/options') // go to this path then guard service will work
    }
  }

  protected onSubmitFormLogin(formLogin: any) {
    const username = formLogin['username']
    const password = formLogin['password']
    // login .subscribe() works for pipe() , next()
    this.authenticateService.login(username, password).subscribe(response => {
      if (response === 'true') {
        // *** navigate is based on the provided array of commands and a starting point. If no starting route is provided, the navigation is absolute.
        // this.router.navigate(['/table-students'])
        // *** same result just can pass only absolute route path.
        this.router.navigateByUrl('/options') // go to this path then guard service will work
      }
    })
  }

}
