import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StableSignalsComponent } from './stable-signals.component';

describe('StableSignalsComponent', () => {
  let component: StableSignalsComponent;
  let fixture: ComponentFixture<StableSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StableSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StableSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
