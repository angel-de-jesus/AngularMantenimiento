import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramapComponent } from './cronogramap.component';

describe('CronogramapComponent', () => {
  let component: CronogramapComponent;
  let fixture: ComponentFixture<CronogramapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronogramapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronogramapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
