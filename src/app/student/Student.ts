 import {Program} from '../student/Program';

export class Student {

    constructor (public id: number,
                public fName: string,
                public lName: string,
                public mName: string,
                public program: Program
              ) {}
}
