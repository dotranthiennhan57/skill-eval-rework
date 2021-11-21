import { MajorSkill } from "./major-skill.model";
import { MinorSkill } from "./minor-skill.model";


export class Employee{
    public name: string;
    public idnumber: string;
    public imagePath: string;
    public position: string;
    public mentor:string;
    public majorSkills: MajorSkill[];
    public minorSkills: MinorSkill[];
 
    constructor(name:string, idnumber: string, imagePath: string,position:string, mentor:string,majorSkills: any, minorSkills: any){
        this.name = name;
        this.idnumber = idnumber;
        this.imagePath= imagePath;
        this.position=position;
        this.mentor=mentor;
        this.majorSkills = majorSkills;
        this.minorSkills = minorSkills;
    }
}