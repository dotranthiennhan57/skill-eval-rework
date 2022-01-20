import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

const baseUrl = 'http://localhost:4580';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getLoginInfo(data: any): Observable<any> {
    return this.http.get(`${baseUrl}/login`, {observe: data})
  }
}
