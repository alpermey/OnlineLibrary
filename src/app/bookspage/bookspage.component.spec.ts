import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookspageComponent } from './bookspage.component';

describe('BookspageComponent', () => {
  let component: BookspageComponent;
  let fixture: ComponentFixture<BookspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
