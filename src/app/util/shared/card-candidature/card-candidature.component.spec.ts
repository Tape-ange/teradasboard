import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCandidatureComponent } from './card-candidature.component';

describe('CardCandidatureComponent', () => {
  let component: CardCandidatureComponent;
  let fixture: ComponentFixture<CardCandidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CardCandidatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
