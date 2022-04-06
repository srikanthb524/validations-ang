import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpParamsExampleComponent } from './http-params-example.component';

describe('HttpParamsExampleComponent', () => {
  let component: HttpParamsExampleComponent;
  let fixture: ComponentFixture<HttpParamsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpParamsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpParamsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
