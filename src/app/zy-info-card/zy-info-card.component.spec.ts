import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZyInfoCardComponent } from './zy-info-card.component';

describe('ZyInfoCardComponent', () => {
  let component: ZyInfoCardComponent;
  let fixture: ComponentFixture<ZyInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZyInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZyInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
