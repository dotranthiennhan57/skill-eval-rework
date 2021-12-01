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

  get(id: any): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${baseUrl}/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  updateDetails(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}/edit`, data);
  }

}
