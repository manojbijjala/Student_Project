import { Component } from '@angular/core';
import { Student } from './Student';
@Component({
    selector: 'app-studentdata',
    templateUrl: './Studentdata.component.html'
  })
export class StudentdataComponent {

  Student = { fname: 'MANOJ',
mname: 'KUMAR',
lname: 'BIJJALA',
id: 1205};
}
