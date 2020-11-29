import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/book.component';
import {cloneDeep} from 'lodash';
import { DialogComponent } from 'src/app/bookspage/dialog/dialog.component';
import { DialogemailComponent } from 'src/app/bookspage/dialogemail/dialogemail.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public b: Book[] = [{name: 'War and Peace', author: 'Tolstoy', amount: 5, id: 0, chosenNumber: 0 },
  {name: 'Crime and Punishment', author: 'Dostoevsky', amount: 3, id: 1, chosenNumber: 0 }];
  clonedArray = cloneDeep(this.b);

  constructor(public dialog: MatDialog) { 
    //empty
  }

  onRightClick(id: number): boolean {
    const sum = this.clonedArray[id].amount;
    console.log(sum);
    if (sum !== this.b[id].amount){
      this.b[id].amount = this.b[id].amount + 1;
      this.b[id].chosenNumber = this.b[id].chosenNumber - 1;
    }
    return false;
  }

  choose(id: number): void {
    if (this.b[id].amount > 0){
      console.log(this.b[id].amount);
      this.b[id].amount = this.b[id].amount - 1;
      this.b[id].chosenNumber = this.b[id].chosenNumber + 1;
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
