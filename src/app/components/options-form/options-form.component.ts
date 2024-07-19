import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
// import {RouterOutlet} from "@angular/router";
import {UnderstandFormModuleComponent} from "../understand-form-module/understand-form-module.component";
import {UnderstandReactiveFormComponent} from "../understand-reactive-form/understand-reactive-form.component";
import {TableStudentsComponent} from "../table-students/table-students.component";
import {CreateStudentFormComponent} from "../create-student-form/create-student-form.component";
import {TableTodosComponent} from "../table-todos/table-todos.component";
import {TableTechComponent} from "../table-tech/table-tech.component";
import {
  UnderstandNgmodelStandaloneComponent
} from "../understnad-ngmodel-standalone/understand-ngmodel-standalone.component";
import {InputDecoratorParentComponent} from "../input-decorator-parent/input-decorator-parent.component";
import {InputDecoratorChildComponent} from "../input-decorator-child/input-decorator-child.component";

@Component({
  selector: 'app-options-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    // RouterOutlet, i set on parent component
    UnderstandFormModuleComponent,
    UnderstandReactiveFormComponent,
    TableStudentsComponent,
    CreateStudentFormComponent,
    TableTodosComponent,
    TableTechComponent,
    UnderstandNgmodelStandaloneComponent,
    InputDecoratorParentComponent,
    InputDecoratorChildComponent
  ],
  templateUrl: './options-form.component.html',
  styleUrl: './options-form.component.css'
})
export class OptionsFormComponent {

  disableFormModule = false
  disableReactForm = false
  disableStudentsTable = false
  disableCreateStudentForm = false
  disableTodosTable = false
  disableTechTable = false
  disableNgModelStandalone = false
  disableInputDecoratorParent = false


  // ngOnInit(): void {
    // no validate this form because if user can access /options it's meaning user had logged in or isUserLoggedIn = true on localStorage
    /*if (localStorage.getItem('isUserLoggedIn') && localStorage.getItem('isUserLoggedIn') != undefined) {
      this.disableOptions = true
    } else {
      this.disableOptions = false
    }*/
  // }


  // i skip .value method cause i pass it on html form
  protected onFormChange(formModule : any ) {
    if (formModule['disableFormModule']) {
      this.disableFormModule = true
    } else {
      this.disableFormModule = false
    }

    // short condition
    this.disableReactForm = !!formModule['disableReactForm'];

    this.disableStudentsTable = !!formModule['disableStudentsTable']

    this.disableCreateStudentForm = !!formModule['disableCreateStudentForm']

    this.disableTodosTable = !!formModule['disableTodosTable']

    this.disableTechTable = !!formModule['disableTechTable']

    this.disableNgModelStandalone = !!formModule['disableNgModelStandalone']

    this.disableInputDecoratorParent = !!formModule['disableInputDecoratorParent']


  }
}
