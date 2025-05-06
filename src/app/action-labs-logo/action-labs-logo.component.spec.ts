import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionLabsLogoComponent } from './action-labs-logo.component';

describe('ActionLabsLogoComponent', () => {
  let component: ActionLabsLogoComponent;
  let fixture: ComponentFixture<ActionLabsLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionLabsLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionLabsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
