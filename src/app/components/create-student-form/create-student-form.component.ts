import { Component } from '@angular/core';
import {StudentService} from "../../services/student.service";
import {FormsModule} from "@angular/forms";
import {Student} from "../../entities/student";

@Component({
  selector: 'app-create-student-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-student-form.component.html',
  styleUrl: './create-student-form.component.css'
})
export class CreateStudentFormComponent {

  private studentService: StudentService;

  constructor(studentService: StudentService) {
    this.studentService = studentService;
  }

  protected onClickCreateStudentForm(formCreateStudent: any) {
    const id = formCreateStudent['id']
    const fullname = formCreateStudent['fullname']
    const faculty = formCreateStudent['faculty']
    const year = formCreateStudent['year']
    const age = formCreateStudent['age']
    // console.log(fullname,faculty,year,age);
    const student = new Student(id,fullname,faculty,year,age);
    let result = this.studentService.addStudent(student)
    if (result) {
      alert('create : '+result);
    }
  }
}
