import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { BookspageComponent } from './bookspage/bookspage.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes =  [
  { path: '', component: HomepageComponent},
  { path: 'about', component: AboutpageComponent},
  { path: 'books', component: BookspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
