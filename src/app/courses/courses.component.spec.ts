import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesGenComponent } from './courses-gen.component';

describe('CoursesGenComponent', () => {
  let component: CoursesGenComponent;
  let fixture: ComponentFixture<CoursesGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesGenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
