import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilESNComponent } from './profil-esn.component';

describe('ProfilESNComponent', () => {
  let component: ProfilESNComponent;
  let fixture: ComponentFixture<ProfilESNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilESNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilESNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
