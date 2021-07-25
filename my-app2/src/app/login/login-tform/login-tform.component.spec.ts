import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTFormComponent } from './login-tform.component';

describe('LoginTFormComponent', () => {
  let component: LoginTFormComponent;
  let fixture: ComponentFixture<LoginTFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
