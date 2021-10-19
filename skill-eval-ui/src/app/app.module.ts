import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditComponent } from './components/edit/edit.component';
import { MypageComponent } from './components/mypage/mypage.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    DashboardComponent,
    EditComponent,
    MypageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
