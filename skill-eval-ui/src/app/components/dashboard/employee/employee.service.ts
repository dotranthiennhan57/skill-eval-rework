import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeesChanged = new Subject<Employee[]>();

  // private employees: Employee[] = [
  //   new Employee('Henry', '1', 
  //   'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdm0qx8t0i9gc9.cloudfront.net%2Fthumbnails%2Fimage%2FrDtN98Qoishumwih%2Fcricket-player-batsman-batting-kneel-cartoon_7y6Thr_thumb.jpg&f=1&nofb=1',
  //   [
  //     new MajorSkill('Data Analyst', 10, [
  //       new MinorSkill('SQL', 9),
  //       new MinorSkill('MS Excel', 10)
  //     ]),

  //     new MajorSkill('Project Manager', 10, null)
  
  // ]),

  //   new Employee('Ayo', '2', 
  //   'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.turbosquid.com%2FPreview%2F2014%2F12%2F22__07_51_45%2FE0084.jpg2dc08dcd-6b83-4f3d-b571-d0ff07d6ad7fOriginal.jpg&f=1&nofb=1',
  //   [
  //     new MajorSkill('React',10,[
  //       new MinorSkill('TypeScript', 10),
  //       new MinorSkill('Redux', 9)
  //     ]),

  //     new MajorSkill('Angular', 7,[
  //       new MinorSkill('TypeScript', 4),
  //       new MinorSkill('HTML',6),
  //       new MinorSkill('Bootstrap',1)
  //     ])
  //   ]),

  //   new Employee('James', '5', 
  //   'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartart.com%2Fimages%2Fanimated-clipart-boy-2.png&f=1&nofb=1',
  //   [
  //     new MajorSkill('Angular', 4,[
  //       new MinorSkill('TypeScript', 4),
  //       new MinorSkill('HTML',6),
  //       new MinorSkill('Bootstrap',1)
  //     ])
  //   ]),
  // ]

  private employees:Employee[]=[]

  constructor() { }

  setEmployees(employees:Employee[]){
    this.employees = employees;
    this.employeesChanged.next(this.employees.slice());
  }

  getEmployees(){
    return this.employees.slice();
  }

  getEmployee(index:number){
    return this.employees[index];
  }

  addEmployee(employee:Employee){
    this.employees.push(employee);
    this.employeesChanged.next(this.employees.slice());
  }

  updateEmployee(index:number, newEmployee: Employee){
    this.employees[index]=newEmployee;
    this.employeesChanged.next(this.employees.slice());
  }

  deleteEmployee(index:number){
    this.employees.splice(index,1);
    this.employeesChanged.next(this.employees.slice());
  }
}
