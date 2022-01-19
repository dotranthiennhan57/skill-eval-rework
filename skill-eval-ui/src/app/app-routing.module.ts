import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './common/guard/auth.guard';
import { AuthComponent } from './common/services/auth/auth.component';
import { EmployeeDetailComponent } from './components/dashboard/employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './components/dashboard/employee/employee-edit/employee-edit.component';
import { EmployeeRelationComponent } from './components/dashboard/employee/employee-relation/employee-relation.component';
import { EmployeeStartComponent } from './components/dashboard/employee/employee-start/employee-start.component';
import { EmployeeComponent } from './components/dashboard/employee/employee.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch:'full'},
  {path: 'employees', component: EmployeeComponent, children:[
    {path:'', component: EmployeeStartComponent},
    {path:'new', component: EmployeeEditComponent},
    {path:':id', component: EmployeeDetailComponent},
    {path:':id/edit', component: EmployeeEditComponent},
    {path:':id/coworker', component: EmployeeRelationComponent}
  ]},
  {path: 'auth', component: AuthComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
