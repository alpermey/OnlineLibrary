import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }
  title = 'onlinelibrary';

  btnClickHome = function(): void {
    this.router.navigateByUrl('');
};

btnClickAbout = function(): void {
  this.router.navigateByUrl('about');
};

btnClickBooks = function(): void {
  this.router.navigateByUrl('books');
};

}
