import { Component, OnInit } from '@angular/core';
import { Student } from './Student';
import { Input } from '@angular/core';
import { Studentservice } from './studentservice';
import { error } from 'protractor';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-studentapp',
    templateUrl: './Studentapp.component.html'
})
export class StudentappComponent implements OnInit {
 studentsArray: Student[] = [];
 constructor(private studentservice: Studentservice) {}


 ngOnInit() {
     this.studentservice.getStudents().subscribe(

    (data) => {this.studentsArray = data as Array<Student>; },
    // tslint:disable-next-line:no-shadowed-variable
    (error) => console.log(error));
  }
//   onDelete(i: number) {
//     this.studentservice.onDelete(i);
//   }
onDelete(id) {
    // if (confirm(`are you sure to delete the student ${'id'}`)) {
    this.studentservice.onDelete(id).subscribe(() => {

        const index = this.studentsArray.findIndex(student => student.id === id);

        this.studentsArray.splice(index, 1);

      // tslint:disable-next-line:no-shadowed-variable
      }, (error: HttpErrorResponse) => {

        if (error.status === 500) {

          this.studentservice.getStudents().subscribe((student) => {

            this.studentsArray = student as Array<Student>;

          });


        }


      }

    );
    }
}
// }
    // students: Array<Student> = [];
    // @Input()
    // addStudent(students) {
    //     this.students.push(students);
    //     console.log(this.students);
    //
