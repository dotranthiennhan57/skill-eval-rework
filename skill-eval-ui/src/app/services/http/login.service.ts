import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

const baseUrl = 'http://localhost:4582';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http:HttpClient) { }

  getLoginInfo(email: string): Observable<any> {
    return this.http.get(`${baseUrl}/login/getUser?email=` + email)
  }
}
