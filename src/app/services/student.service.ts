import {Student} from "../entities/student"
import {Observable, ReplaySubject} from "rxjs";

// concept service in angular have to inject
// when I use this concept inject Service, it will create object class at the one time when injected !!! Pretties Cool
export class StudentService {

  private students: Student [];
  // *** ReplaySubject is good cause ...
  private studentList = new ReplaySubject<Student[]>();

  constructor() {
    this.students = [];
    this.students.push(
      new Student(100, "Peter Parker", "Mathematics and Computer Science", 3, 20),
      new Student(101, "Alex Rider", "Photographic Science and Printing Technology", 2, 20),
      new Student(102, "Steve Austin", "Electrical Engineering", 1, 19),
      new Student(103, "Max Austin", "Environmental Engineering", 1, 19),
      new Student(104, "Jax Slider", "Photographic Science and Printing Technology", 4, 22),
    )
    // publish students as data on studentList.next(students) it's meaning you can get data by subscribe(...)
    this.studentList.next(this.students);
    console.log('StudentService worked')
  }


  public retrieveStudentList(): Observable<Student[]> {
    return this.studentList;
  }

  public removeStudent(id: number): void {
    console.log('you gonna remove student id {}', id);
    // find student by id
    let studentExists = this.students.find(student => student.id === id);
    // then remove it by index
    // array.splice(startIndex, numberOfElementsToBeDeleted);
    this.students.splice(this.students.indexOf(studentExists!), 1);
    // *** have to update students on studentList.next(data)
    // cause students was changed
    this.studentList.next(this.students);
  }

  public addStudent(student: Student): boolean {
    let result = this.students.push(student)
    if (result > 0) {
      // updated
      this.studentList.next(this.students);
      return true;
    }
    return false;
  }
}
