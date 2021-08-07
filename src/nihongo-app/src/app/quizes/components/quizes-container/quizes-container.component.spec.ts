import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizesContainerComponent } from './quizes-container.component';

describe('QuizesContainerComponent', () => {
  let component: QuizesContainerComponent;
  let fixture: ComponentFixture<QuizesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
