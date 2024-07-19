import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

/*
  Standalone Components are a new feature in Angular 17
  that allows you to build and use components without the need for NgModules.
  This feature simplifies component development and reuse,
  making it easier to build and maintain large-scale applications.
  *** Standalone Components are components that are not declared in any NgModule. ***
*/
// To use a Standalone Component, simply import it in your component or module :
@Component({
  selector: 'app-navbar',
  standalone: true, // *** mark stand alone component
  imports: [
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
