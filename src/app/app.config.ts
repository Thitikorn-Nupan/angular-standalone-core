import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
/* in standalone have to set provideHttpClient for use http client
With the recent changes in angular there is no app.module file. So with the new structure you will have to upate it in app.config file and ad*/
import { provideHttpClient } from '@angular/common/http' // for httpClient
import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {AuthenticateService} from "./services/authenticate.service";
import {StudentService} from "./services/student.service";
import {TodosService} from "./services/todos.service";
import {TechService} from "./services/tech.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient() ,
    // You can use the providers field of the ApplicationConfig (passed to the bootstrapApplication function) to provide a service or other Injectable at the application level.
    // ** provide service this here
    {provide : AuthenticateService},
    {provide : StudentService},
    {provide : TodosService},
    {provide : TechService},
  ]
};
