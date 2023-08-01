import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderAccueilComponent } from './tender-accueil.component';

describe('TenderAccueilComponent', () => {
  let component: TenderAccueilComponent;
  let fixture: ComponentFixture<TenderAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderAccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
