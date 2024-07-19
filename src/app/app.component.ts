import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FormsModule} from "@angular/forms";
import {UnderstandFormModuleComponent} from "./components/understand-form-module/understand-form-module.component";
import {
  UnderstandReactiveFormComponent
} from "./components/understand-reactive-form/understand-reactive-form.component";
import {NgIf} from "@angular/common";
import {GuardsRoutingLoginComponent} from "./components/guards-routing-login/guards-routing-login.component";
import {AuthenticateService} from "./services/authenticate.service";
import {OptionsFormComponent} from "./components/options-form/options-form.component";
import {StudentService} from "./services/student.service";
import {TodosService} from "./services/todos.service";
import {TechService} from "./services/tech.service";


/*
  Main Component works as NgModule
*/
@Component({
  selector: 'app-root',
  standalone: true,
  // Look at imports: [ Standalone components put on here ]
  imports: [
    NavbarComponent,
    UnderstandFormModuleComponent,
    UnderstandReactiveFormComponent,
    FormsModule,
    NgIf,
    GuardsRoutingLoginComponent,
    RouterOutlet,
    OptionsFormComponent,
    // HttpClientModule // set on app.config.ts instead
  ],
  // Look at providers : [ many service put on here (child does not put) just inject ]
  providers: [
    // **** in standalone you can provide services on app.config.ts instead
    // AuthenticateService,
    // StudentService,
    // TodosService,
    // TechService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'lab-ag-learn-standalone-concept';

}
