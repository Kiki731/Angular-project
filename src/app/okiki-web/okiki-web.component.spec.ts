import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkikiWebComponent } from './okiki-web.component';

describe('OkikiWebComponent', () => {
  let component: OkikiWebComponent;
  let fixture: ComponentFixture<OkikiWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OkikiWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OkikiWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
