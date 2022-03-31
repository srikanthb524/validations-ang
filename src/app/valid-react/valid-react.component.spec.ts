import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidReactComponent } from './valid-react.component';

describe('ValidReactComponent', () => {
  let component: ValidReactComponent;
  let fixture: ComponentFixture<ValidReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidReactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
