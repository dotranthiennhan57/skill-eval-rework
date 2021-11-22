import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { HeaderComponent } from 'src/app/components/header/header.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id: number;
  editMode =false;
  employeeForm: FormGroup;

 majorOption: any[] = [
    {
      "option": "Angular"
    },
    {
      "option": "React"
    },
    {
      "option": "Data Analyst"
    },
    {
      "option": "Project Management"
    },
  ];

  constructor(private route: ActivatedRoute, 
    private employeeService: EmployeeService, 
    private router:Router,
  ) { }

  ngOnInit(): void {
    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.id = +params['id'];
    //     this.editMode = params['id'] !=null;
    //     this.initForm();
    //   }
    // );
  }

  onSubmit(){
    if(this.editMode){
      this.employeeService.updateEmployee(this.id, this.employeeForm.value);
    }else {
      this.employeeService.addEmployee(this.employeeForm.value);
    }
    // this.header.onSaveData();
    this.onCancel()

  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  get controls() {
    return (<FormArray>this.employeeForm.get('majorSkills')).controls;
  }

  onAddMajorSkill (){
    (<FormArray>this.employeeForm.get('majorSkills')).push(
      new FormGroup ({
        'name': new FormControl(null,Validators.required),
        'rating': new FormControl(null,[Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)]
          )
      })
    )
  }

  onDeleteMajorSkill(index:number){
    (<FormArray>this.employeeForm.get('majorSkills')).removeAt(index);
  }

  // private initForm(){
  //   let employeeName = '';
  //   let employeeImagePath = '';
  //   let employeeIDnumber = '';
  //   let employeePosition = '';
  //   let employeeMentor = '';
  //   let employeeMajorSkills = new FormArray([]);

  //   if(this.editMode){
  //     const employee = this.employeeService.getEmployee(this.id);
  //     employeeName = employee.name;
  //     employeeImagePath = employee.imagePath;
  //     employeeIDnumber = employee.idnumber;
  //     employeeMentor = employee.mentor;
  //     employeePosition = employee.position;
  //     if(employee['majorSkills']){
  //       for(let majorSkill of employee.majorSkills){
  //         employeeMajorSkills.push(
  //           new FormGroup({
  //             'name' : new FormControl(majorSkill.name,Validators.required),
  //             'rating': new FormControl(majorSkill.rating,[Validators.required,
  //               Validators.pattern(/^[1-9]+[0-9]*$/)]
  //               )
  //           })
  //         )
  //       }
  //     }

  //   }

  //   this.employeeForm = new FormGroup({
  //     'name': new FormControl(employeeName,Validators.required),
  //     'imagePath': new FormControl(employeeImagePath),
  //     'idnumber': new FormControl(employeeIDnumber,Validators.required),
  //     'position': new FormControl(employeePosition,Validators.required),
  //     'mentor': new FormControl(employeeMentor),
  //     'majorSkills': employeeMajorSkills
  //   });
  // }

}
