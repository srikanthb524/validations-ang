import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGetExampleComponent } from './http-get-example.component';

describe('HttpGetExampleComponent', () => {
  let component: HttpGetExampleComponent;
  let fixture: ComponentFixture<HttpGetExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpGetExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpGetExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
