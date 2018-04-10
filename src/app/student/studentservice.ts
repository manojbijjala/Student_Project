import { Student } from './Student';
import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Program } from './Program';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class Studentservice {
    private url = 'http://localhost:9091/students';

    constructor(private httpclient: HttpClient) {}
    student: Array<Student> = [new Student(1, '', '', '', Program.CS )];

    addStudent(students: Student) {
        this.student.push(students);
        console.log(this.student);

    }



    addStudents(student) {

        const Options = {

            headers: new HttpHeaders({

            'Content-Type': 'application/json'
        })
    };

     return this.httpclient.post(this.url, JSON.stringify(student), Options);

    }


    getStudents() {
        // return this.student;
        return this.httpclient.get(this.url);
    }
    // onDelete(index: number) {
    //     this.student.splice(index, 1);

    // }
    onDelete(id): Observable<Object> {

        return this.httpclient.delete(`${this.url}/${id}`, {observe : 'response'});
      }

}
