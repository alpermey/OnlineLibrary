import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogemailComponent } from './dialogemail.component';

describe('DialogemailComponent', () => {
  let component: DialogemailComponent;
  let fixture: ComponentFixture<DialogemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
