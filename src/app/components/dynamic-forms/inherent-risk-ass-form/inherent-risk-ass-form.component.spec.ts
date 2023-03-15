import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InherentRiskAssFormComponent } from './inherent-risk-ass-form.component';

describe('InherentRiskAssFormComponent', () => {
  let component: InherentRiskAssFormComponent;
  let fixture: ComponentFixture<InherentRiskAssFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InherentRiskAssFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InherentRiskAssFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
