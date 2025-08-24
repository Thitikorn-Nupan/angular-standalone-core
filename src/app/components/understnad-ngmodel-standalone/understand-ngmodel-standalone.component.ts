import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Student} from "../../entities/student";

@Component({
  selector: 'app-understnad-ngmodel-standalone',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './understand-ngmodel-standalone.component.html',
  styleUrl: './understand-ngmodel-standalone.component.css'
})
export class UnderstandNgmodelStandaloneComponent {
  // these prop  can pass value by concept Ngmodel Standalone  change while user input
  protected fullname: string = ''
  protected faculty: string = ''
  protected year: number = 0
  protected age: number = 0

  protected student = new Student(100, 'Test', 'Faculty of Agriculture', 3, 19)

  protected onSubmitClicked() {
    console.log(`${Object.values(this.student)}`)
  }
}
