import {Component, OnInit} from '@angular/core';
import {AuthenticateService} from "../../services/authenticate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-guards-routing-logout',
  standalone: true,
  imports: [],
  templateUrl: './guards-routing-logout.component.html',
  styleUrl: './guards-routing-logout.component.css'
})
export class GuardsRoutingLogoutComponent implements OnInit {
  private authenticateService: AuthenticateService;
  private router: Router;

  constructor(authenticateService: AuthenticateService, router: Router) {
    this.authenticateService = authenticateService;
    this.router = router;
  }

  ngOnInit(): void {
    this.authenticateService.logout();
    // if you want to redirect to path just use navigateByUrl() , navigate([])
    this.router.navigateByUrl('/login')
  }

}
