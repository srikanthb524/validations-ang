import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarrarynestedComponent } from './formarrarynested.component';

describe('FormarrarynestedComponent', () => {
  let component: FormarrarynestedComponent;
  let fixture: ComponentFixture<FormarrarynestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormarrarynestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormarrarynestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
