/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/book.component';
import {cloneDeep} from 'lodash';
import { DialogComponent } from 'src/app/bookspage/dialog/dialog.component';
import { DialogemailComponent } from 'src/app/bookspage/dialogemail/dialogemail.component';
import { FormControl } from '@angular/forms';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public b: Book[] = [{name: 'War and Peace', author: 'Tolstoy', amount: 5, id: 0, chosenNumber: 0 },
  {name: 'Crime and Punishment', author: 'Dostoevsky', amount: 3, id: 1, chosenNumber: 0 }];
  clonedArray = cloneDeep(this.b);
  public c:Book[] = [];

  constructor(public dialog: MatDialog,public http: HttpService) { 
    //empty
  }

  public emailFormControl = new FormControl("", []);
    
  public nameFormControl = new FormControl("", []);

  getBooks(): void {
    const user = {
    name: this.nameFormControl.value,
    email: this.emailFormControl.value
    }
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
    data => {
    // eslint-disable-next-line prefer-const
    let res:any = data; 
    console.log(
    `${user.name}, confirmation has been sent to your email and the message id is ${res.messageId}`
    );
    },
    err => {
    console.log(err);
    }
    );
    this.dialog.closeAll();
  }

  getChosenBooks(): void {
    for (let x = 0; x < this.b.length; x++){
      if(this.b[x].chosenNumber > 0){
       this.c.push(this.b[x]);
      }
    }
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
    this.getChosenBooks();
  }

  openEmailDialog(): void {
    this.dialog.open(DialogemailComponent);
  }

}
