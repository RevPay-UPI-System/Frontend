import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraccountComponent } from './useraccount.component';

describe('UseraccountComponent', () => {
  let component: UseraccountComponent;
  let fixture: ComponentFixture<UseraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('testing html element', () => {
  //   const data= fixture.nativeElement 
  //   expect(querySelector(".text-center").textContent).toContain("Welcome to User Account")
  // });


});


// function querySelector(arg0: string) {
//   throw new Error('Function not implemented.');
// }
// function querySelector(arg0: string) {
//   throw new Error('Function not implemented.');
// }

