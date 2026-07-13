import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FormsModule} from "@angular/forms";
import {UnderstandFormModuleComponent} from "./components/understand-form-module/understand-form-module.component";
import {UnderstandReactiveFormComponent} from "./components/understand-reactive-form/understand-reactive-form.component";
import {NgIf} from "@angular/common";
import {LoginComponent} from "./components/login/login.component";
import {OptionsFormComponent} from "./components/options-form/options-form.component";

/**
  Main Component works as NgModule
*/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ // Look at imports: [ Standalone components put on here ]
    NavbarComponent,
    UnderstandFormModuleComponent,
    UnderstandReactiveFormComponent,
    FormsModule,
    NgIf,
    LoginComponent,
    RouterOutlet,
    OptionsFormComponent,
    // HttpClientModule , you can set on app.config.ts instead
  ],
  providers: [ // Look at providers : [ many service put on here (child does not put) just inject ] **** you can provide services on app.config.ts instead
    // AuthenticateService,
    // StudentService,
    // TodosService,
    // TechService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
