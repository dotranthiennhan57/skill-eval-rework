import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/dashboard/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditComponent } from './components/edit/edit.component';
import { MypageComponent } from './components/mypage/mypage.component';
import { SignupComponent } from './components/login/signup/signup.component';
import { EmployeeEditComponent } from './components/dashboard/employee/employee-edit/employee-edit.component';
import { EmployeeStartComponent } from './components/dashboard/employee/employee-start/employee-start.component';
import { EmployeeDetailComponent } from './components/dashboard/employee/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './components/dashboard/employee/employee-list/employee-list.component';
import { EmployeeItemComponent } from './components/dashboard/employee/employee-list/employee-item/employee-item.component';
import { AuthComponent } from './common/services/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    DashboardComponent,
    EditComponent,
    MypageComponent,
    SignupComponent,
    EmployeeEditComponent,
    EmployeeStartComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
