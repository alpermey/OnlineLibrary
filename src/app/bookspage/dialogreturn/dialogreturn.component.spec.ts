import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogreturnComponent } from './dialogreturn.component';

describe('DialogreturnComponent', () => {
  let component: DialogreturnComponent;
  let fixture: ComponentFixture<DialogreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogreturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
