import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditComponent } from './employee-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReworkemployeeService } from 'src/app/services/reworkemployee.service';

describe('EmployeeEditComponent', () => {
  let component: EmployeeEditComponent;
  let fixture: ComponentFixture<EmployeeEditComponent>;
  let reworkEmployeeService:ReworkemployeeService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEditComponent ],
      imports: [HttpClientTestingModule],
      providers: [ReworkemployeeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditComponent);
    component = fixture.componentInstance;
    reworkEmployeeService = TestBed.inject(ReworkemployeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
