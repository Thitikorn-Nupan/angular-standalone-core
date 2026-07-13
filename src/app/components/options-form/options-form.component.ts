import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {UnderstandFormModuleComponent} from "../understand-form-module/understand-form-module.component";
import {UnderstandReactiveFormComponent} from "../understand-reactive-form/understand-reactive-form.component";
import {TableStudentsComponent} from "../table-students/table-students.component";
import {CreateStudentFormComponent} from "../create-student-form/create-student-form.component";
import {TableTodosComponent} from "../table-todos/table-todos.component";
import {TableTechComponent} from "../table-tech/table-tech.component";
import {UnderstandNgmodelStandaloneComponent} from "../understnad-ngmodel-standalone/understand-ngmodel-standalone.component";
import {InputDecoratorParentComponent} from "../input-decorator-parent/input-decorator-parent.component";
import {InputDecoratorChildComponent} from "../input-decorator-parent/input-decorator-child/input-decorator-child.component";

@Component({
  selector: 'app-options-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    UnderstandFormModuleComponent,
    UnderstandReactiveFormComponent,
    TableStudentsComponent,
    CreateStudentFormComponent,
    TableTodosComponent,
    TableTechComponent,
    UnderstandNgmodelStandaloneComponent,
    InputDecoratorParentComponent,
    InputDecoratorChildComponent,
    NgForOf
  ],
  templateUrl: './options-form.component.html',
  styleUrl: './options-form.component.css'
})
export class OptionsFormComponent {
  protected readonly checkboxesObject : {name : string,label:string}[] = [
    {name : 'disableFormModule' , label : 'Form Module'},
    {name : 'disableReactForm' , label : 'React Form'},
    {name : 'disableStudentsTable' , label : 'Students Table'},
    {name : 'disableCreateStudentForm' , label : 'Create Student'},
    {name : 'disableTodosTable' , label : 'Todos Table'},
    {name : 'disableTechTable' , label : 'Tech Table'},
    {name : 'disableNgModelStandalone' , label : 'NgModel on Standalone'},
    {name : 'disableInputDecoratorParent' , label : 'Input Decorator Parent'},
  ]
  protected disableFormModule : boolean = false
  protected disableReactForm: boolean = false
  protected disableStudentsTable: boolean = false
  protected disableCreateStudentForm: boolean = false
  protected disableTodosTable: boolean = false
  protected disableTechTable: boolean = false
  protected disableNgModelStandalone: boolean = false
  protected disableInputDecoratorParent: boolean = false

  protected onFormChange(formModule : any ) {
    if (formModule['disableFormModule']) { // i skip .value method cause i pass it on html form
      this.disableFormModule = true
    } else {
      this.disableFormModule = false
    }

    // Short condition
    this.disableReactForm = !!formModule['disableReactForm'];

    this.disableStudentsTable = !!formModule['disableStudentsTable']

    this.disableCreateStudentForm = !!formModule['disableCreateStudentForm']

    this.disableTodosTable = !!formModule['disableTodosTable']

    this.disableTechTable = !!formModule['disableTechTable']

    this.disableNgModelStandalone = !!formModule['disableNgModelStandalone']

    this.disableInputDecoratorParent = !!formModule['disableInputDecoratorParent']
  }
}
