/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/book.component';
import {cloneDeep} from 'lodash';
import { DialogComponent } from 'src/app/bookspage/dialog/dialog.component';
import { DialogemailComponent } from 'src/app/bookspage/dialogemail/dialogemail.component';
import { FormControl} from '@angular/forms';
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
  amountOfusers = 0;
  public c:Book[] = [];

  constructor(public dialog: MatDialog,public http: HttpService) { 
    //empty
  }

  MyArrayType:Array<{email: string, book: string, amount: number,id:number}> = [];

  public emailFormControl = new FormControl("", []);
    
  public nameFormControl = new FormControl("", []);

  giveBooks(arr:Array<{book: string;amount: number;id: number;}>, email:string):void {
    for(let i = 0; i < arr.length;i++){
      const name = arr[i].book;
      const number = arr[i].amount;
      for (let index = 0; index < this.MyArrayType.length; index++) {
        if(email === this.MyArrayType[index].email){
          if(name === this.MyArrayType[index].book){
            this.MyArrayType[index].amount = number;
            if(number === 0){
              this.MyArrayType.splice(index,1,{email:"deleted",book:"",amount:0,id:-1});
            }
          }
        }
      }
    }
    this.dialog.closeAll();
  }

  createUser(email:string): void {
    for(let i = 0; i < this.c.length;i++){
      this.MyArrayType.push({
        email: email,
        book:this.c[i].name,
        amount:this.calculate(this.getSortBookName(this.c[i].name)),
        id:this.c[i].id
      })
    }
    this.amountOfusers++;
    console.log(this.amountOfusers);
  }

  getSortBookName(nameofBook:string):Array<{name: string;author: string;amount: number;id: number;chosenNumber: number;}>
  {
    return this.c.filter(obj => {
      return obj.name === nameofBook;
    })
  }

  calculate(arr:Array<{name: string;author: string;amount: number;id: number;chosenNumber: number;}>): number {
    let num = 0;
    for (let index = 0; index < arr.length; index++) {
      num=num+arr[index].chosenNumber;
    }
    return num;
  }


  findBooks(email:string): Array<{book:string,amount:number,id:number}> {
    const foundBooks:Array<{book:string,amount:number,id:number}> = [];
    const resultArray = this.MyArrayType.filter(obj => {
      return obj.email === email;
    })

    for (let index = 0; index < resultArray.length; index++) {
      foundBooks.push({
        book:resultArray[index].book,
        amount:resultArray[index].amount,
        id:resultArray[index].id
      })
    }
    return foundBooks;
  }

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
    this.createUser(user.email);
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
       this.c.pop();
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
    if (sum !== this.b[id].amount){
      this.b[id].amount = this.b[id].amount + 1;
      this.b[id].chosenNumber = this.b[id].chosenNumber - 1;
    }
    return false;
  }

  choose(id: number): void {
    if (this.b[id].amount > 0){
      this.b[id].amount = this.b[id].amount - 1;
      this.b[id].chosenNumber = this.b[id].chosenNumber + 1;
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
    this.getChosenBooks();
  }

  openReturnDialog(): void {
    this.dialog.open(DialogreturnComponent);
  }

}
