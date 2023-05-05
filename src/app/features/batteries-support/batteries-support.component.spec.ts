import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteriesSupportComponent } from './batteries-support.component';

describe('BatteriesSupportComponent', () => {
  let component: BatteriesSupportComponent;
  let fixture: ComponentFixture<BatteriesSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteriesSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteriesSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
