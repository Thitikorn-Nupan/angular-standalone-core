import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

/**
  Standalone Components are a new feature in Angular 17
  that allows you to build and use components without the need for NgModules.
  This feature simplifies component development and reuse,
  making it easier to build and maintain large-scale applications.
  *** Standalone Components are components that are not declared in any NgModule. ***
*/
@Component({
  selector: 'app-navbar',
  standalone: true, // Mark standalone component
  imports: [   // To use a Standalone Component, simply import it in your component or module
    NgForOf,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  protected routerLinks : {key : string , value : string}[] = [
    {key : 'Home', value : '#'},
    {key : 'To Do 1', value : '#'},
    {key : 'To Do 2', value : '#'},
    {key : 'To Do 3', value : '#'},
  ];

}
