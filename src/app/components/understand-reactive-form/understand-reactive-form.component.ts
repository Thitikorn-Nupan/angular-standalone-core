import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-understand-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    JsonPipe,
    // Assign Reactive Form *** Working with form control
  ],
  templateUrl: './understand-reactive-form.component.html',
  styleUrl: './understand-reactive-form.component.css'
})
export class UnderstandReactiveFormComponent implements OnInit {

  protected formBuilder: FormBuilder;

  // Created an instance of formGroup and set it to local variable, formdata.
  protected  formGroup1! : FormGroup;
  protected  formGroup2! : FormGroup;
  // Cretes an instance of FormControl and set it one of the entry in formdata.

  private subFormBuilder1 =  {
    /* PatternValidator is used to validate regex pattern. Let’s perform simple email validation. */
    email :  ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
    username : new FormControl('', Validators.required),
    gender : new FormControl('', Validators.required),
  }
  protected subFormBuilder2 =  {
    address : ["", Validators.required],
    zipcode : ["", Validators.required],
  }

  protected address : string = ''
  protected zipcode : string = ''

  /* FormBuilder has to inject then use */
  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  ngOnInit(): void {
    this.formGroup1 = this.formBuilder.group(this.subFormBuilder1)
    this.formGroup2 = this.formBuilder.group(this.subFormBuilder2)
  }

  protected onClickedSubmitFormUser(formGroup: FormGroup) {
    console.log(`${formGroup.value['email']} , ${formGroup.value['username']} , ${formGroup.value['gender']} `);
  }

  protected onClickedSubmitFormAddress(formGroup2: FormGroup) {
    console.log(`${formGroup2.value['address']} , ${formGroup2.value['zipcode']}`);
    this.address = formGroup2.value['address']
    this.zipcode = formGroup2.value['zipcode']
  }
}
