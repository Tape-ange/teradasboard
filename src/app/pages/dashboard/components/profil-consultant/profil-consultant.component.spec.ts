import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilConsultantComponent } from './profil-consultant.component';

describe('ProfilConsultantComponent', () => {
  let component: ProfilConsultantComponent;
  let fixture: ComponentFixture<ProfilConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilConsultantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
