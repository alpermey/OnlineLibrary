import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-bookspage',
  templateUrl: './bookspage.component.html',
  styleUrls: ['./bookspage.component.css']
})

export class BookspageComponent implements OnInit {

  b = this.bookService.b;

  constructor(public dialog: MatDialog, public bookService: DataService) {
    // empty
   }

  ngOnInit(): void {
    // empty
  }

  onRightClick(id: number): boolean {
    this.bookService.onRightClick(id);
    return false;
  }

  choose(id: number): void {
    this.bookService.choose(id);
  }

  openDialog(): void {
    this.bookService.openDialog();
  }

  openEmailDialog(): void {
    this.bookService.openEmailDialog();
  }

  openReturnDialog(): void {
    this.bookService.openReturnDialog();
  }

  wasChosen(): boolean {
    return this.bookService.wasChosen();
  }

}
