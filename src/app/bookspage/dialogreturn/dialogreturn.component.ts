import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';
import { HttpService } from 'src/service/http.service';
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-dialogreturn',
  templateUrl: './dialogreturn.component.html',
  styleUrls: ['./dialogreturn.component.css']
})
export class DialogreturnComponent implements OnInit {

  constructor(public http: HttpService,public bookService: DataService) { //empty
   }

  ngOnInit(): void {
    //empty
  }

  public foundBooks:Array<{book:string,amount:number,id:number}> = [];
  email:string;
  clonedArray = cloneDeep(this.foundBooks);

  giveBooks(arr:Array<{book: string;amount: number;id: number}>,email:string): void {
    this.bookService.giveBooks(arr,email);
  }

  removing(id:number):void{
    if (this.foundBooks[id].amount>0){
      this.foundBooks[id].amount = this.foundBooks[id].amount - 1;
    }
  }

  adding(id:number):boolean {
    const sum = this.clonedArray[id].amount;
    if (sum !== this.foundBooks[id].amount){
      this.foundBooks[id].amount = this.foundBooks[id].amount + 1;
    }
    return false;
  }

  findBooks(email:string):void
  {
    this.foundBooks = this.bookService.findBooks(email);
    this.clonedArray = cloneDeep(this.foundBooks);
    console.log(this.foundBooks);
    console.log(this.clonedArray);
  }

}
