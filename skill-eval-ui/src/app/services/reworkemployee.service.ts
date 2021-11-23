import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

const baseUrl = 'http://localhost:4580/employees';

@Injectable({
  providedIn: 'root'
})
export class ReworkemployeeService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl);
  }

  get(employee_id: any): Observable<Employee> {
    return this.http.get(`${baseUrl}/${employee_id}`);
  }

}
