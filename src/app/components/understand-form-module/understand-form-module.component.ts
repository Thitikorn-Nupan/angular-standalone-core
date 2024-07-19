import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-understand-form-module',
  standalone: true,
  imports: [
    FormsModule // Assign FormsModule *** It is mainly used for creating a simple form application.
  ],
  templateUrl: './understand-form-module.component.html',
  styleUrl: './understand-form-module.component.css'
})
export class UnderstandFormModuleComponent {
  // *** you have to know name tags own your own
  protected onClickedSubmitFormUser(formUser1 : any) {
    let s1="",s2="",s3=""
    if (formUser1.s1) {
      s1 = "Frontend";
    }
    if (formUser1.s2) {
      s2 = "Backend";
    }
    if (formUser1.s3) {
      s3 = "Full Stack";
    }
    console.log(`${formUser1.email} , ${formUser1.username} , ${formUser1.gender} , [${s1} , ${s2} , ${s3}]`);

  }

}
