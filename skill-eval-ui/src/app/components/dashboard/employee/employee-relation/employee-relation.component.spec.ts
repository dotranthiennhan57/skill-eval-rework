import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRelationComponent } from './employee-relation.component';

describe('EmployeeRelationComponent', () => {
  let component: EmployeeRelationComponent;
  let fixture: ComponentFixture<EmployeeRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
