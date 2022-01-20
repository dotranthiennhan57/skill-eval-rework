import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/http/login.service';
import { EmailValidators } from './email.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
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
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) { }

  // get f() { return this.loginForm != null ? this.loginForm.controls : null }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        EmailValidators.cannotContainSpace,
        EmailValidators.containInfodatEmail
      ]]

    });
  }

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
  // onLogin() {
  //   if (!!this.loginForm.get('email').value)
  //   {
  //     this.loginService.getLoginInfo(this.loginForm.get('email').value).subscribe(data => {

  //       this.currentUser = data;
  //       if (!!this.currentUser)
  //       {
  //         this.isLoginSuccess = true;
  //         this.showError = false;
  //         localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
  //         this.router.navigate(['/employees/', this.currentUser.user_id]);
  //       }
  //       else
  //       {
  //         this.showError = true;
  //         this.isLoginSuccess = false;
  //       }
  //     },(error)=> {
  //       this.showError = true;
  //       this.isLoginSuccess = false;
  //     })
  //   }
  //   else {
  //     this.showError = true;
  //     this.isLoginSuccess = false;
  //   }

  // }

  onLogin(): void {
    const data = this.loginForm.get('email').value;

    this.loginService.getLoginInfo(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });

  }


}
