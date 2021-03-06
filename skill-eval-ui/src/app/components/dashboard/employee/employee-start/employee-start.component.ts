import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { ReworkemployeeService } from 'src/app/services/reworkemployee.service';

@Component({
  selector: 'app-employee-start',
  templateUrl: './employee-start.component.html',
  styleUrls: ['./employee-start.component.css']
})
export class EmployeeStartComponent implements OnInit {
  
  employees?: Employee[];
  
  currentEmployee: Employee = {};
  currentIndex = -1;
  
  constructor(private reworkemployeeService: ReworkemployeeService) { }

  //Call retrieveEmployees() immediately to get data (array of objects) from data base
  ngOnInit(): void {
    this.retrieveEmployees();
  }

  // This method makes a http call. Check reworkemployeeService
  retrieveEmployees():void{
    this.reworkemployeeService.getAllEmployees()
      .subscribe({
        next: (data) => {
          this.employees = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  

}
