import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPostExampleComponent } from './http-post-example.component';

describe('HttpPostExampleComponent', () => {
  let component: HttpPostExampleComponent;
  let fixture: ComponentFixture<HttpPostExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpPostExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPostExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
