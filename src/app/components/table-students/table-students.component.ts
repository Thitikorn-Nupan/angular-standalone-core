import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service"
import {Student} from "../../entities/student";
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-table-students',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  providers: [
  ],
  templateUrl: './table-students.component.html',
  styleUrl: './table-students.component.css'
})
export class TableStudentsComponent implements OnInit {

  private readonly studentService: StudentService
  protected students!: Student[]

  // Inject service when i use this concept service will create at the one time when injected !!! Pretties Cool
  constructor(studentService: StudentService) {
    this.studentService = studentService;
  }

  ngOnInit(): void {
    this.loadStudent();
  }

  private loadStudent() {
    this.studentService.retrieveStudentList().subscribe(response => (this.students = response)) // subscribe() work for getting a response on next(...)
  }

  protected onRemoveOption(studentId: number): void {
    this.studentService.removeStudent(studentId)
  }

}
