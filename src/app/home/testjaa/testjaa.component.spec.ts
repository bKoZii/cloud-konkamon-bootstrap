import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestjaaComponent } from './testjaa.component';

describe('TestjaaComponent', () => {
  let component: TestjaaComponent;
  let fixture: ComponentFixture<TestjaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestjaaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestjaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
