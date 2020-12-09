import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';
import { HttpService } from 'src/service/http.service';

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

  b = this.bookService.findBooks;

  email="";

  add():void{
    console.log("Add function worked");
  }

  delete():void {
    console.log("Delete function worked");
  }

  findBooks(e:string):void
  {
    this.bookService.findBooks(e);
  }

}
