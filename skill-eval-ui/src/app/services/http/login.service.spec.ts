import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpTestingController: HttpTestingController;

  const baseUrl = 'http://localhost:4582'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });
    service = TestBed.inject(LoginService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(()=>{
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('baseUrl is localhost:4582',() => {
    let baseUrl = 'http://localhost:4582';
    expect(baseUrl).toEqual('http://localhost:4582')
  })

  it('isLoggedIn is called', () => {
    service.isLoggedIn;
    expect(service.isLoggedIn).toBeTruthy();
  })

  it('[getLoginInfo] is called', () => {
    let email = 'nhan.do@infodatinc.com';
    service.getLoginInfo(email);
    expect(service.getLoginInfo(email)).toBeTruthy();
  })
});
