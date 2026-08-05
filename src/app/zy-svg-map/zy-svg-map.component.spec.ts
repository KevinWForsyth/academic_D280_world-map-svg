import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZySvgMapComponent } from './zy-svg-map.component';

describe('ZySvgMapComponent', () => {
  let component: ZySvgMapComponent;
  let fixture: ComponentFixture<ZySvgMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZySvgMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZySvgMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
