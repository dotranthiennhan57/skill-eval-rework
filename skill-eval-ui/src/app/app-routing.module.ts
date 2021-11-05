import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guard/auth.guard';
import { AuthComponent } from './common/services/auth/auth.component';
import { EmployeeDetailComponent } from './components/dashboard/employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './components/dashboard/employee/employee-edit/employee-edit.component';
import { EmployeeStartComponent } from './components/dashboard/employee/employee-start/employee-start.component';
import { EmployeeComponent } from './components/dashboard/employee/employee.component';
import { EmployeesResolverService } from './components/dashboard/employee/employees-resolver.service';

const routes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch:'full'},
  {path: 'employee', component: EmployeeComponent, canActivate:[AuthGuard],children:[
    {path:'', component: EmployeeStartComponent},
    {path:'new', component: EmployeeEditComponent},
    {path:':id', component: EmployeeDetailComponent, resolve: [EmployeesResolverService]},
    {path:':id/edit', component: EmployeeEditComponent, resolve: [EmployeesResolverService]},
  ]},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
