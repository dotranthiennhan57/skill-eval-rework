import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { MajorSkill } from 'src/app/models/major-skill.model';
import { MinorSkill } from 'src/app/models/minor-skill.model';
import { ReworkemployeeService } from 'src/app/services/reworkemployee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit, OnChanges {
  @ViewChild('addSubSkillofMajor', {static: false}) addSubSkillofMajor:ElementRef;

  currentEmployee: Employee = {};

  currentEmployeeAll?: Employee[];

  currentMajorSkills?: MajorSkill[];

  currentSubskills?: MinorSkill[];

  submitted = false;

  constructor(
    private reworkemployeeService: ReworkemployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private renderer:Renderer2
    ) {}

  ngOnInit(): void {
    this.getEmployee(this.route.snapshot.params['id']);
    this.getSubskill(this.route.snapshot.params['id']);
  }

  ngOnChanges(): void{
    this.getEmployee(this.route.snapshot.params['id']);
    this.getSubskill(this.route.snapshot.params['id']);
  }
  
//Notes: Ayo said the data retrieved from http call is always an array. So set property(type: object) to array index
  getEmployee(id:any): void {

    this.reworkemployeeService.getEmployeeInfo(id)
    .subscribe({
      next: (data) => {
        this.currentEmployeeAll = data;
        this.currentEmployee = data[0];
        console.log(data);
      },
      error: (e) => console.error(e)
    });
    
  }

  getSubskill(id:any): void{
    this.reworkemployeeService.getAllEmployeesSubSkill(id)
      .subscribe({
        next: (data) => {
          this.currentSubskills = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  getMajorSkills(): void{
    this.reworkemployeeService.getMajorSkillsList()
      .subscribe({
        next: (data) => {
          this.currentMajorSkills = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });

    this.reworkemployeeService.getSubSkillsList()
      .subscribe({
        next: (data) => {
          this.currentSubskills = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  };

  addMajorSkill(event, skill_id, employee_id): void{
    if(event) event.preventDefault();

    const data = {
      employee_id: employee_id,
      skill_id: skill_id
    }
    
    this.reworkemployeeService.addEmployeeMajorSkill(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    
    // for(let i = 0; i < this.addSubSkillofMajor.nativeElement.length; i++){
    //   this.addSubSkillofMajor.nativeElement[i].click();
    // }

    window.location.reload();
    // this.ngOnChanges();
  };

  deleteMajorSkill( event ,skill_id, employee_id): void{
    if(event) event.preventDefault();


    const data ={
      employee_id: employee_id,
      skill_id: skill_id
    }

    this.reworkemployeeService.deleteEmployeeMajorSkill(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });

      window.location.reload();
      // this.ngOnChanges();
  };

  updateSkill(event, skill_id, employee_id, skill_rating): void {
    // if(event) event.preventDefault();
    
    const data ={
      employee_id: employee_id,
      skill_id: skill_id,
      skill_rating: skill_rating = event.target.value
    }

    this.reworkemployeeService.editEmployeeMajorSkill(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });

      // this.ngOnChanges();

  };

}
