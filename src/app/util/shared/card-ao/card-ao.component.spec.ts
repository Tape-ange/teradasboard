import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAoComponent } from './card-ao.component';

describe('CardAoComponent', () => {
  let component: CardAoComponent;
  let fixture: ComponentFixture<CardAoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CardAoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
