import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { MinorSkill } from '../models/minor-skill.model';

const baseUrl = 'http://localhost:4580';

@Injectable({
  providedIn: 'root'
})
export class ReworkemployeeService {

  constructor(private http:HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${baseUrl}/employees`);
  }

  getAllEmployeesSubSkill(employee_id: any): Observable<MinorSkill[]> {
    return this.http.get<MinorSkill[]>(`${baseUrl}/employees/${employee_id}/data`);
  }


  getEmployeeInfo(employee_id: any): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${baseUrl}/employees/${employee_id}`);
  }

  // getSkill(employee_id: any, skill_id: any): Observable<MinorSkill[]> {
  //   return this.http.get<MinorSkill[]>(`${baseUrl}/${employee_id}/${skill_id}`);
  // }

  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

}
