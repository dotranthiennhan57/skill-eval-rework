import { MajorSkill } from "./major-skill.model";
import { MinorSkill } from "./minor-skill.model";


export class Employee{
    name?: string;
    employee_id?: any;
    imagePath?: string;
    position: string;
    // public mentor:string;
    majorSkills: MajorSkill[];
    minorSkills: MinorSkill[];
 
    // constructor(name:string, idnumber: string, imagePath: string,position:string, mentor:string,majorSkills: any, minorSkills: any){
    //     this.name = name;
    //     this.employee_id = idnumber;
    //     this.imagePath= imagePath;
    //     this.position=position;
    //     // this.mentor=mentor;
    //     this.majorSkills = majorSkills;
    //     this.minorSkills = minorSkills;
    // }
}