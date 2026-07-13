import {Routes} from '@angular/router';
import {GuardsRoutingLogoutComponent} from "./components/guards-routing-logout/guards-routing-logout.component";
import {LoginComponent} from "./components/login/login.component";
import {ExpenseGuard} from "./guards/expense.guard";
import {OptionsFormComponent} from "./components/options-form/options-form.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  // *** ExpenseGuard works if user is not logged in Just go ahead to /login path First
  {path: 'logout', component: GuardsRoutingLogoutComponent, canActivate: [ExpenseGuard]},  // CanActivate − Used to stop the access to a route.
  // /options path it controls many standalone components So you protect parent component it is meaning you protect child components
  {path: 'options', component: OptionsFormComponent, canActivate: [ExpenseGuard]},
  // Any request as '' , / will redirect to /options
  {path: '**', redirectTo: '/options', pathMatch: 'full'}
];

