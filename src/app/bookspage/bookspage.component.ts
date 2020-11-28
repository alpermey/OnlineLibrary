import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/book.component';
import { DialogComponent } from './dialog/dialog.component';
import {cloneDeep} from 'lodash';
import { DialogemailComponent } from './dialogemail/dialogemail.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bookspage',
  templateUrl: './bookspage.component.html',
  styleUrls: ['./bookspage.component.css']
})

export class BookspageComponent implements OnInit {

  constructor(public dialog: MatDialog) {
    // empty
   }
   
  b: Book[] = [{name: 'War and Peace', author: 'Tolstoy', amount: 5, id: 0 },
  {name: 'Crime and Punishment', author: 'Dostoevsky', amount: 3, id: 1 }];
  clonedArray = cloneDeep(this.b);
  ngOnInit(): void {
    // empty
  }

  onRightClick(id: number): boolean {
    const sum = this.clonedArray[id].amount;
    console.log(sum);
    if (sum !== this.b[id].amount){
      this.b[id].amount = this.b[id].amount + 1;
    }
    return false;
  }

  choose(id: number): void {
    if (this.b[id].amount > 0){
      console.log(this.b[id].amount);
      this.b[id].amount = this.b[id].amount - 1;
      console.log(this.b[id].amount);
    } else {
      this.openDialog();
    }
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }

  openEmailDialog(): void {
    this.dialog.open(DialogemailComponent);
  }

}
