import { Component, EventEmitter } from '@angular/core';
import { Student } from './Student';
import { Program } from './Program';
import { Studentservice } from './studentservice';
import { Output } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
    selector: './app-studentform',
    templateUrl:  './studentform.component.html'
})
export class StudentformComponent {
    public id: number;
    public fName: String;
    public lName: String;
    public mName: String;
    public program: Program;

    // student: Student[] = [];
    constructor(private studentservice: Studentservice, private router: Router) { }

//     students: Student;
//     @Output()
//     newStudentAdded: EventEmitter<Student> = new EventEmitter<Student>();

//     addStudent() {
//     this.students = new Student(this.fname,
//         this.mname,
//         this.lname,
//         this.id,
//         this.program);
//    console.log(this.students);
//    this.newStudentAdded.emit(this.students);
//     }

Onsubmit() {

    const student = {
      id: this.id,
      fName: this.fName,
      lName: this.lName,
      mName: this.mName,
      program: this.program

    };
console.log(student);
this.studentservice.addStudents(student).subscribe(

    (data) => {this.router.navigate(['/data']); },
 // tslint:disable-next-line:no-shadowed-variable
 (error) => {console.log(error); } );

}

}
