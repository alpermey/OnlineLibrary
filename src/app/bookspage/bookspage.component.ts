import { Component, OnInit } from '@angular/core';
import { Book } from 'src/book.component';

@Component({
  selector: 'app-bookspage',
  templateUrl: './bookspage.component.html',
  styleUrls: ['./bookspage.component.css']
})

export class BookspageComponent implements OnInit {

  name: ''; 
  nameOfBooks: string[];
  books: Book[] = [];

  constructor() { }

  ngOnInit(): void {}
  
  typesOfBooks: string[] = ['War and Peace', 'Crime and Punishment', 'The Cherry Orchard'];

  b: Book[] = [{name:'W',author:'wathor',amount:5,id:0},
  {name:'A',author:'author',amount:3,id:1}
]

  choose(id: number) {
    if(this.b[id].amount != 0){
      console.log(this.b[id].amount);
      this.b[id].amount= this.b[id].amount - 1;
      console.log(this.b[id].amount);
    } 
  }

}
