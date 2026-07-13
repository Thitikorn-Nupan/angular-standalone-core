import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";

// Service for Guards in Routing
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private isUserLoggedIn = false;
  public readonly userLoggedIn = new ReplaySubject<string>()

  /**
   private readonly secondDelay = 1000;
   public login(username: string, password: string): Observable<any> {
   let response = "false"
   // Just a short if condition
   this.isUserLoggedIn = username == 'ttknp' && password == '12345';
   if (this.isUserLoggedIn) {
   response = "true"
   }
   // store response to local storage on web browser it'll be true and false as string only
   localStorage.setItem('isUserLoggedIn', response);

   return of(this.isUserLoggedIn).pipe(
   // Delays the emission of items from the source Observable by a given timeout or until a given Date.
   // Time shifts each item by some specified amount of milliseconds
   // *** if delays() done do tap()
   delay(this.secondDelay),
   tap(response => {
   console.log("User Authentication is successful : " + response);
   })) // end return
   }
   */

  // Same result
  public login(username: string, password: string): Observable<any> {
    let response: string = "false"
    this.isUserLoggedIn = username == 'ttknp' && password == '12345'; // Just a short if condition
    if (this.isUserLoggedIn) {
      response = "true"
    }
    localStorage.setItem('isUserLoggedIn', response); // store response to local storage on web browser it'll be true and false as string only
    this.userLoggedIn.next(String(this.isUserLoggedIn));  //  publish data as response on userLoggedIn.next(data)
    return this.userLoggedIn; // now you can get data as response by subscribe(...)
  }


  public logout() {
    this.isUserLoggedIn = false;
    this.userLoggedIn.next('false')
    localStorage.removeItem('isUserLoggedIn'); // clear all storage
  }

}
