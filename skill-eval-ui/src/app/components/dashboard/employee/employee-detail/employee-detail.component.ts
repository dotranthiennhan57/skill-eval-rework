import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { ReworkemployeeService } from 'src/app/services/reworkemployee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  currentEmployee: Employee = {};

  currentEmployeeAll: Employee[] = [];

  constructor(
    private reworkemployeeService: ReworkemployeeService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
      this.getEmployee(this.route.snapshot.params['id']);
    }
  
//Notes: Ayo said the data retrieved from http call is always an array. So set property(type: object) to array index
  getEmployee(id:any): void {
    this.reworkemployeeService.get(id)
      .subscribe({
        next: (data) => {
          this.currentEmployee = data[0];
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    
  }

}
