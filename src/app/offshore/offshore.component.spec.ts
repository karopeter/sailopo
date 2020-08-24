import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffshoreComponent } from './offshore.component';

describe('OffshoreComponent', () => {
  let component: OffshoreComponent;
  let fixture: ComponentFixture<OffshoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffshoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffshoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
