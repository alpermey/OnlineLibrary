/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Book } from 'src/book.component';
import { DataService } from 'src/service/data.service';
import { HttpService } from 'src/service/http.service';


@Component({
  selector: 'app-dialogemail',
  templateUrl: './dialogemail.component.html',
  styleUrls: ['./dialogemail.component.css']
})
export class DialogemailComponent implements OnInit {

  constructor(public http: HttpService,public bookService: DataService) { 
    // empty
  }

  ngOnInit(): void {
    console.log(this.http.test);
  }

  choice = this.bookService.b;

  emailFormControl = new FormControl("", []);
    
  nameFormControl = new FormControl("", []);

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
  }

}
