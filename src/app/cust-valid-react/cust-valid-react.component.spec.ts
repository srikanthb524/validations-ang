import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustValidReactComponent } from './cust-valid-react.component';

describe('CustValidReactComponent', () => {
  let component: CustValidReactComponent;
  let fixture: ComponentFixture<CustValidReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustValidReactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustValidReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
