export class Student {
  private _id : number
  private _fullname: string;
  private _faculty: string;
  private _year: number;
  private _age: number;

  constructor(id : number,fullname: string, faculty: string, year: number, age: number) {
    this._id = id;
    this._fullname = fullname;
    this._faculty = faculty;
    this._year = year;
    this._age = age;
  }


  set id(value: number) {
    this._id = value;
  }

  set fullname(value: string) {
    this._fullname = value;
  }

  set faculty(value: string) {
    this._faculty = value;
  }

  set year(value: number) {
    this._year = value;
  }

  set age(value: number) {
    this._age = value;
  }

  get id(): number {
    return this._id;
  }

  get fullname(): string {
    return this._fullname;
  }

  get faculty(): string {
    return this._faculty;
  }

  get year(): number {
    return this._year;
  }

  get age(): number {
    return this._age;
  }
}
