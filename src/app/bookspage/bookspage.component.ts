import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-bookspage',
  templateUrl: './bookspage.component.html',
  styleUrls: ['./bookspage.component.css']
})

export class BookspageComponent implements OnInit {

  constructor(public dialog: MatDialog, public bookService: DataService) {
    // empty
   }
   
  ngOnInit(): void {
    // empty
  }
  
  b = this.bookService.b;

  onRightClick(id:number): boolean {
    this.bookService.onRightClick(id);
    return false;
  }

  choose(id:number): void {
    this.bookService.choose(id);
  }

  openDialog(): void {
    this.bookService.openDialog();
  }

  openEmailDialog(): void {
    this.bookService.openEmailDialog();
  }

  wasChosen(): boolean {
    return this.bookService.wasChosen();
  }

}
