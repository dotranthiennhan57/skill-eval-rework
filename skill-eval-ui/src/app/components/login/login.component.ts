import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { EmailValidators } from './email.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required, 
      EmailValidators.cannotContainSpace,
      EmailValidators.containInfodatEmail
    ])
  });
  // faUser = faUser;
  // faLock = faLock;
  userName: string;
  passWord: string;
  submitted: boolean;
  isLoginSuccess: boolean;
  showError: boolean;
  menuList: any;
  users: any;
  currentUser: User;
  menusByRole: any;

  constructor(
    private formBuilder: FormBuilder) { }

  // get f() { return this.loginForm != null ? this.loginForm.controls : null }

  ngOnInit(): void {
    // this.buildLoginForm();
  }

  // buildLoginForm() {
  //   this.loginForm = this.formBuilder.group({
  //     email: ['', [Validators.required]]

  //   });
  // }

  onSubmit() {
    // this.submitted = true;
    // //Check form is valid or not
    // if (this.loginForm.invalid) {
    //   return false;
    // }
    // else
    //   this.onLogin();
  }

  //This is only temporary implmentaion and needs to be removed and used single sign on
  onLogin() {
    // if (!!this.loginForm.get('userEmail').value)
    // {
    //   this.authService.getUserDetails(this.loginForm.get('userEmail').value).subscribe(data => {

    //     this.currentUser = data;
    //     if (!!this.currentUser)
    //     {
    //       this.isLoginSuccess = true;
    //       this.showError = false;
    //       localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    //       this.router.navigate(['/dashboard/']);
    //     }
    //     else
    //     {
    //       this.showError = true;
    //       this.isLoginSuccess = false;
    //     }
    //   },(error)=> {
    //     this.showError = true;
    //     this.isLoginSuccess = false;
    //   })
    // }
    // else {
    //   this.showError = true;
    //   this.isLoginSuccess = false;
    // }

  }


}
