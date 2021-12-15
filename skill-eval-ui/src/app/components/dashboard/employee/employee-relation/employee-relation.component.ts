import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { ReworkemployeeService } from 'src/app/services/reworkemployee.service';

@Component({
  selector: 'app-employee-relation',
  templateUrl: './employee-relation.component.html',
  styleUrls: ['./employee-relation.component.css']
})
export class EmployeeRelationComponent implements OnInit {

  employees?: Employee[];

  constructor(private reworkemployeeService: ReworkemployeeService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveCoworkers(this.route.snapshot.params['id'])
  }

  // This method makes a http call. Check reworkemployeeService
  retrieveCoworkers(id:any):void{
    this.reworkemployeeService.getAllCoworker(id)
      .subscribe({
        next: (data) => {
          this.employees = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
