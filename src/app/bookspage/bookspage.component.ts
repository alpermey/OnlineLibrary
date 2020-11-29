import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/book.component';
import { DialogComponent } from './dialog/dialog.component';
import {cloneDeep} from 'lodash';
import { DialogemailComponent } from './dialogemail/dialogemail.component';
import { FormControl } from '@angular/forms';
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

  onRightClick(id:number): void {
    this.bookService.onRightClick(id);
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

}
