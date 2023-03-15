import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutContainerComponent } from './default-layout-container.component';

describe('DefaultLayoutContainerComponent', () => {
  let component: DefaultLayoutContainerComponent;
  let fixture: ComponentFixture<DefaultLayoutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultLayoutContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultLayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
