import { MajorSkill } from "./major-skill.model";
import { MinorSkill } from "./minor-skill.model";


export class Employee{
    first_name?: string;
    last_name?:string;
    employee_id?: any;
    imagePath?: string;
    position_id?: string;
    position_name?: string;
    skill_id?: string;
    skill_name?: string;
    skill_rating?: string;
    // public mentor:string;
    // majorSkills: MajorSkill[];
    // minorSkills: MinorSkill[];
 
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