/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/book.component';
import {cloneDeep} from 'lodash';
import { DialogComponent } from 'src/app/bookspage/dialog/dialog.component';
import { DialogemailComponent } from 'src/app/bookspage/dialogemail/dialogemail.component';
import { FormControl } from '@angular/forms';
import { HttpService } from './http.service';
import { DialogmessageComponent } from 'src/app/bookspage/dialogmessage/dialogmessage.component';
import { DialogerrorComponent } from 'src/app/bookspage/dialogerror/dialogerror.component';
import { DialogreturnComponent } from 'src/app/bookspage/dialogreturn/dialogreturn.component';

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
    if(user.email){
      this.dialog.open(DialogmessageComponent);
    }
    this.http.sendEmail("http://34.65.62.119:3000/sendmail", user).subscribe(
    data => {
    // eslint-disable-next-line prefer-const
    let res:any = data; 
    console.log(
    `${user.name}, confirmation has been sent to your email and the message id is ${res.messageId}`
    );
    this.clearChosenBooks();
    this.clonedArray = cloneDeep(this.b);
    this.dialog.closeAll();
    },
    err => {
    console.log(err);
    this.dialog.open(DialogerrorComponent);
    }
    );
  }

  wasChosen(): boolean{
    for (let x = 0; x < this.b.length; x++){
      if(this.b[x].chosenNumber > 0){
       return true;
      }
    }
  }

  clearChosenBooks(): void {
    for (let x = 0; x < this.b.length; x++){
      if(this.b[x].chosenNumber > 0){
       this.b[x].chosenNumber = 0;
      }
    }
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

  openReturnDialog(): void {
    this.dialog.open(DialogreturnComponent);
  }

}
