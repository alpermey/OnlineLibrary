/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';
import { HttpService } from 'src/service/http.service';


@Component({
  selector: 'app-dialogemail',
  templateUrl: './dialogemail.component.html',
  styleUrls: ['./dialogemail.component.css']
})
export class DialogemailComponent implements OnInit {

  choice = this.bookService.b;

  emailFormControl = this.bookService.emailFormControl;

  nameFormControl = this.bookService.nameFormControl;

  constructor(public http: HttpService, public bookService: DataService) {
    // empty
  }

  ngOnInit(): void {
  // empty
  }

  getBooks(): void {
    this.bookService.getBooks();
  }

}
