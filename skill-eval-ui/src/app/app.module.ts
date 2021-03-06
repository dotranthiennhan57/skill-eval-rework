import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/dashboard/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/login/signup/signup.component';
import { EmployeeEditComponent } from './components/dashboard/employee/employee-edit/employee-edit.component';
import { EmployeeStartComponent } from './components/dashboard/employee/employee-start/employee-start.component';
import { EmployeeDetailComponent } from './components/dashboard/employee/employee-detail/employee-detail.component';
import { EmployeeItemComponent } from './components/dashboard/employee/employee-start/employee-item/employee-item.component';
import { AuthComponent } from './common/services/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeRelationComponent } from './components/dashboard/employee/employee-relation/employee-relation.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    EmployeeEditComponent,
    EmployeeStartComponent,
    EmployeeDetailComponent,
    EmployeeItemComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    EmployeeRelationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
