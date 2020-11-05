import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/book.component';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-bookspage',
  templateUrl: './bookspage.component.html',
  styleUrls: ['./bookspage.component.css']
})

export class BookspageComponent implements OnInit {

  name: ''; 
  nameOfBooks: string[];
  books: Book[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}
  
  typesOfBooks: string[] = ['War and Peace', 'Crime and Punishment', 'The Cherry Orchard'];

  b: Book[] = [{name:'W',author:'wathor',amount:5,id:0},
  {name:'A',author:'author',amount:3,id:1}
]

  choose(id: number) {
    if(this.b[id].amount > 0){
      console.log(this.b[id].amount);
      this.b[id].amount= this.b[id].amount - 1;
      console.log(this.b[id].amount);
    } else {
      this.openDialog();
    }
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
