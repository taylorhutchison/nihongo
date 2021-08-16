import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HirganaContainerComponent } from './hiragana-practice.component';

describe('HiraganaContainerComponent', () => {
  let component: HirganaContainerComponent;
  let fixture: ComponentFixture<HirganaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HirganaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HirganaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
