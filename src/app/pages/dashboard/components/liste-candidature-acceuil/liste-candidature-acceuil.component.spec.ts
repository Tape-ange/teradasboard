import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCandidatureAcceuilComponent } from './liste-candidature-acceuil.component';

describe('ListeCandidatureAcceuilComponent', () => {
  let component: ListeCandidatureAcceuilComponent;
  let fixture: ComponentFixture<ListeCandidatureAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCandidatureAcceuilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCandidatureAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
