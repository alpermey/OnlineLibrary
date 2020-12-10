import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DialogreturnComponent } from './dialogreturn.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

describe('DialogreturnComponent', () => {
  let component: DialogreturnComponent;
  let fixture: ComponentFixture<DialogreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialogModule],
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
